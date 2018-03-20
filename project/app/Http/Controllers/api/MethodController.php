<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Models\User;
use Carbon\Carbon;
use App\Models\Phase;
use Illuminate\Support\Facades\DB;
use App\Notifications\ProjectCompleted;

class MethodController extends Controller
{
    public function resetpassword(Request $request){
        $user = Auth::user();
        $email= $user->email ;
        

        if($user!=null){
           
            $newpass = bcrypt($request->input('newpassword'));
            User::where('email', $email)->update(['password' => $newpass]);
            return response()->json([
                'status'=>'success',
                'message'=>'password update successfully'
            ]);

        }else{
            return response()->json([
                'status'=>'fail',
                'message'=>'username or password is invalid'
            ]);
        }
        
    }


    public function showdeadline($id){
        $user = User::find($id);
        if($user == null){
            return response()->json([
                'status'=>'fail',
                'message'=>'invalid user'
            ]);
        }else{
            $userprojectid = \DB::table('project_user')->where('user_id',$id)->first();
            if($userprojectid == null){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'you have no projects'
                ]);
            }
            
            $userprojectid =$userprojectid->project_id;
            $sdate = \DB::table('projects')->where('id',$userprojectid)->first()->received_date;
            $edate= \DB::table('projects')->where('id',$userprojectid)->first()->submission_date;
            $start = Carbon::parse($sdate);
            $end =  Carbon::parse($edate);
        
            $days = $end->diffInDays($start);
            //$paseid = \DB::table('phases')->where('project_id',$userprojectid)->first()->id;
            $noofphase = \DB::table('projects')->where('id',$userprojectid)->first()->noOfPhase;
            
            $pasetime = round($days/$noofphase);
            
            $endpase = array();
            $endpase[0] = $start;
            $dates = array();
            for( $i = 0; $i<$noofphase; $i++){
                if($i == 0){
                    $endpase[$i] = $endpase[0]->addDays($pasetime);
                    $start = Carbon::parse($endpase[$i]);
                    $dates[$i] = [$start];
                    
                }else{
                    $endpase[$i] = $endpase[$i-1]->addDays($pasetime);
                    $start = Carbon::parse($endpase[$i]);
                    $dates[$i] = $start;
                }
                
            
            }
            
            return response()->json([
                'status'=>'success',
                'message'=>$dates
            ]);

        }
        
    }
    public function freeDeveloperName(){
        $userDev=DB::table('role_user')->where('role_id',4)
                     ->pluck('user_id');
                     
        $work =\DB::table('project_user')->whereIn('user_id',$userDev)->pluck('user_id');
        
        $collection = collect($userDev);
        $notwork = $collection->diff($work);
      
        $users = DB::table('users')
                ->whereIn('id',  $notwork)
                ->get();
                
                return response()->json([
                    'status'=>'success',
                    'message'=>$users
                ]);
    }
    public function freeQaName(){
        $userqa=DB::table('role_user')->where('role_id',8)
                     ->pluck('user_id');
                     
        $work =\DB::table('project_user')->whereIn('user_id',$userqa)->pluck('user_id');
        
        $collection = collect($userqa);
        $notwork = $collection->diff($work);
      
        $users = DB::table('users')
                ->whereIn('id',  $notwork)
                ->get();
                
                return response()->json([
                    'status'=>'success',
                    'message'=>$users
                ]);
    }
    public function freeBaName(){
        $userba=DB::table('role_user')->where('role_id',6)
                     ->pluck('user_id');
                     
        $work =\DB::table('project_user')->whereIn('user_id',$userba)->pluck('user_id');
        
        $collection = collect($userba);
        $notwork = $collection->diff($work);
      
        $users = DB::table('users')
                ->whereIn('id',  $notwork)
                ->get();
                
                return response()->json([
                    'status'=>'success',
                    'message'=>$users
                ]);
    }
    public function freeArchiName(){
        $userarchi=DB::table('role_user')->where('role_id',7)
                     ->pluck('user_id');
                     
        $work =\DB::table('project_user')->whereIn('user_id',$userarchi)->pluck('user_id');
        
        $collection = collect($userarchi);
        $notwork = $collection->diff($work);
      
        $users = DB::table('users')
                ->whereIn('id',  $notwork)
                ->get();
                
                return response()->json([
                    'status'=>'success',
                    'message'=>$users
                ]);
    }

    public function freeEmployeeDetail(){
        $admin=0;
        $hrm=0;
        $rm=0;
        $dev=0;
        $pm=0;
        $ba=0;
        $aa=0;
        $qa=0;
        
        $roles =\DB::table('project_user')->pluck('user_id');
        $users = DB::table('users')
                ->whereNotIn('id', $roles)
                ->pluck('id');
        
            foreach($users as $user){
                $roleId=DB::table('role_user')->where('user_id', $user)->first()->role_id;
                $role=DB::table('roles')->where('id',$roleId)->first()->name;
                switch ($role) {
                    case "admin":
                    $admin=$admin+1;
                    break;
        
                    case "human-resource-manager":
                    $hrm=$hrm+1;
                    break;
        
                    case "resource-manager":
                    $rm=$rm+1;
                    break;
        
                    case "project-manager":
                    $pm=$pm+1;

                    case "business-analyst":
                    $ba=$ba+1;
                    break;
        
                    case "architecture":
                    $aa=$aa+1;
                    break;
                    
                    case "quality-assurance":
                    $qa=$qa+1;
                    break;
                    
                    default:
                    $dev=$dev+1;
                        }
            }
            return response()->json([
                'admin'=>$admin,
                'human_resource_manager'=>$hrm,
                'resource_manager'=>$rm,
                'project-manager'=>$pm,
                'business_analyst'=>$ba,
                'architecture'=>$aa,
                'quality_assurance'=>$qa,
                'developer'=>$dev
            ]);
    }
    public function showRequest(){
        $req=DB::table('projects')->where('status',null)->first();
        $id=$req->id;
       DB::table('projects')->where('id',$id)->update(['status' =>'read']);
        return response()->json([$req]);
    }

    
    public function updatedContact(Request $req){
        $user = Auth::user();
        $id= $user->id ;
        $contact=$req['contact'];
       
        DB::table('user_contacts')->where('user_id',$id)->update(['number'=>$contact]);
           
        return response()->json([
            'status'=>'success',
            'message'=>'contact update successfully'
        ]);

    }
    public function updatedSkill(Request $req){
        $user = Auth::user();
        $id= $user->id ;
        $sill=$req['skills'];
       
        DB::table('user_skills')->where('user_id',$id)->update(['skill'=>$sill]);
           
        return response()->json([
            'status'=>'success',
            'message'=>'skill update successfully'
        ]);
    }
    public function releaseEmployee(){
        
        $dates=DB::table('projects')->get();
        foreach($dates as $date){
            $subDate=$date->submission_date;
                    if(date('Y-m-d')==$subDate){
                        $id=$date->id;
                        DB::table('project_user')->where('project_id',$id)->delete();
                    }
        }
        return response()->json([
            'status'=>'success',
            'message'=>'See you project'
        ]);
       
    }
    
}
