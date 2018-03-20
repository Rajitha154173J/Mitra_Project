<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Auth;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;


class ProjectController extends Controller
{
    //Get all details for project manager
    public function getprojects(){
        $projects = DB::table('projects')->get();
        return response()->json([
            'status' => 'success',
            'data' =>$projects
        ]);

    }
    /**
     * Get all projects belong to the authenticated user.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Auth::user()
            ->projects;

        return response()->json([
            'status' => 'success',
            'data' => $projects
        ]);
    }
    public function allproject(){
        $projects = Project::all();

        return response()->json([
            'status' => 'success',
            'data' => $projects
        ], 200);
    }

    public function getoneproject($id){

        $project=DB::table('projects')->where('id',$id)->first();
        return response()->json([
            'status' => 'success',
            'data' => $project
        ]);
    }
    /**
     * Add a new project.
     *
     * @param ProjectRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        // make the project with the given data
        $project = Project::create($request->all());

        $data = null;

       if ($project == null)
        {
          
            $data = [
                'status' => 'error',
                'message' => 'Project creation failed',
                'code' => 400
            ];
        }
        else
        {
            $data = [
                'status' => 'success',
                'data' => $project,
                'code' => 200
            ];
        }

      
        return response()->json($data, $data['code']);
    }

    /**
     * Get a single project
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        // get the projects only belongs to the logged in user.
        $project = Auth::user()
            ->projects // relationship via the logged in user.
            ->where('id', $id) // filter it by the id, [ collection instance ]
            ->first(); // grab the first object; if we have any.

        $data = null;

        if ($project == null)
        {
            $data = [
                'status' => 'error',
                'message' => 'Project not found',
                'code' => 400
            ];
        }
        else
        {
            $data = [
                'status' => 'success',
                'data' => $project,
                'code' => 200
            ];
        }

        return response()->json($data, $data['code']);
    }

    /**
     * Update the project details
     *
     * @param ProjectRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        // // get the project details.
        // $project = Auth::user()
        //     ->projects
        //     ->where('id', $id)
        //     ->first();

        // make the data array
        $data = null;
        $project=Project::where('id',$id)->first();
       // $project=DB::table('projects')->where('id',$id)->first();
        

        // check for project instance nullability
        if ($project == null)
        {
            $data = [
                'status' => 'error',
                'message' => 'Project not found',
                'code' => 400
            ];
        }
        else
        { 
              
            DB::table('projects')->where('id',$id)->update(['name' => $request['name']]);
            DB::table('projects')->where('id',$id)->update(['submission_date' =>$request['submission_date']]);
            DB::table('projects')->where('id',$id)->update(['received_date' =>$request['received_date']]);
            DB::table('projects')->where('id',$id)->update(['noOfPhase' => $request['noOfPhase']]);
            DB::table('projects')->where('id',$id)->update(['description' => $request['description']]);
            DB::table('projects')->where('id',$id)->update(['account_id' => $request['account_id']]);
            
             $data = [
                'status' => 'success',
                'code' => 200
            ];
        }

        // return the json response.
        return response()->json($data, $data['code']);

    }

    /**
     * Delete the project
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // // get the project
        // $project = Auth::user()
        //     ->projects
        //     ->where('id', $id)
        //     ->first();

        $project = DB::table('projects')->where('id',$id)->delete();
        $data = null;

        if ($project == null)
        {

            // build the data
            $data = [
                'status' => 'error',
                'code' => 400,
                'message' => 'Project not available'
            ];

        }
        else
        {
            // $projectDeleted = $project->delete();
            $data = [
                'status' => 'success',
                'code' => 200,
                'message' => "project and it's assets have been removed."
            ];
        }

        // return the response.
        return response()->json($data, $data['code']);
    }

}
