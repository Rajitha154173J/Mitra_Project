<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use App\Notifications\ProjectCompleted;



use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    /**
     * Get all the users in the database
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'data' => $users
        ], 200);
    }

    /**
     * Add a new user to the database.
     *
     * @param UserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        
        if ($request->ajax())
        {
            return response()->json(true);
        }

        // $contact=$request['contact'];
        // return $contact;

        // make the user with the given data
      // $user = User::create($request->all());
        $user= new User;
        $user->name = $request->name;
        $user->dob = $request->dob;
        $user->address = $request->address;
        $user->enrolled_year = $request->enrolled_year;
        $user->email = $request->email;
        $user->password = "123456789";
        $user->save();

        $contact=$request['contact'];
        $skill=$request['skills'];
        $email=$request->email;
        $role=$request['role'];
        $userID=DB::table('users')->where('email',$email)->first()->id;
        DB::table('user_contacts')->insert([
            ['user_id' =>$userID,
            'number'=>$contact],
            ]);
        DB::table('user_skills')->insert([
            ['user_id' =>$userID,
            'skill'=>$skill],
                ]);
        
        switch ($role) {
            case "admin":
             $roles=1;
            break;

            case "human-resource-manager":
            $roles=2;
            break;

            case "resource-manager":
            $roles=3;
            break;

            case "project-manager":
            $roles=5;
            break;

            case "business-analyst":
            $roles=6;
            break;

            case "architecture":
            $roles=7;
            break;
            
            case "quality-assurance":
            $roles=8;
            break;
            
            default:
            $roles=4;
                }
            
        DB::table('role_user')->insert([
                [ 'role_id'=>$roles,
                   'user_id' =>$userID,
                ],
                    ]);
        
            
        // build the response var.
        $data = null;

        // check for the variable instance
        if ($user == null)
        {
            // build the respective response.
            $data = [
                'status' => 'error',
                'message' => 'user creation failed',
                'code' => 400
            ];
        }
        else
        {
            $data = [
                'status' => 'success',
                'data' => $user,
                'code' => 201
            ];
        }

        // return the response.
        return response()->json($data, $data['code']);
    }

    /**
     * Get all details of a user; in-depth
     *
     * @param $id
     * @return \Response
     */
    public function show($id)
    {

        $user = User::find($id);

        if ($user == null)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found !',
                'code' => 400
            ], 400);
        }
        else
        {
            return response()->json([
                'status' => 'success',
                'data' => $user,
                'code' => 200
            ], 200);
        }
    }

    /**
     * Update a user specified.
     *
     * @description Only HRs and Admins can access this route.
     *
     * @param UserRequest $request
     * @param User $user
     * @return \Response
     */
    public function update(Request $request, User $user)
    { 
        if ($user == null)
        {
            
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 400);
        }
        else
        {
           
            $userUpdate = $user->update($request->all());
            
            $data = null;

            if ($userUpdate)
            {
                $data = [
                    'status' => 'success',
                    'data' => $user,
                    'code' => 200
                ];
            }
            else
            {
                $data = [
                    'status' => 'error',
                    'message' => 'User couldnt be updated.',
                    'code' => 400
                ];
            }
        }

        return response()->json($data, $data['code']);
    }

    /**
     * Remove a user from a database
     *
     * @description Access is restricted to HRs and Admins
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(User $user)
    {
        
        if ($user == null)
        {

            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 400);

        }
        else
        {

            // $userDeleted = $user->delete();
            $userDeleted= DB::table('users')->where('id',$user->id)->delete();
            
            if ($userDeleted)
            {
                return response()->json([
                    'status' => 'success',
                    'message' => 'User deleted successfully',
                    'code' => 200
                ]);
            }
            else
            {
                return response()->json([
                    'status' => 'error',
                    'message' => 'User deletion failed',
                    'code' => 200
                ]);
            }

        }
    }
    public function getNotifications()
    { 
      
       $user= Auth::user()->id;

       if($user == null){
        return response()->json([
            'status'=>'fail',
            'message'=>'invalid user'
        ]);
        }
        else{
            $userprojectid = \DB::table('project_user')->where('user_id',$user)->first();
            if($userprojectid == null){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'you have no projects'
                ]);
            }
            $userprojectid =$userprojectid->project_id;
            $edate= \DB::table('projects')->where('id',$userprojectid)->first()->submission_date;
           
            if(date('Y-m-d')==$edate) {
                user::find($user)->notify(new ProjectCompleted);
            }
        }


    
        $notifications =  Auth::user()->notifications;

        return response()->json([
            'status' => 'success',
            'data' => $notifications
        ]);

    }

    /**
     * Mark notification as READ
     *
     * @param $notification
     */
    public function readNotification()
    {
        $id= Auth::user()->id;
        
        $user = User::find($id);

            foreach ($user->unreadNotifications as $notification) {
                $notification->markAsRead();
            }

    }
}
