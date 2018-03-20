<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AssignController extends Controller
{
    

    
public function assignArchi(Request $request){
        $reqArchi=$request['archi'];
        $reqproject=$request['project_id'];
        $other=0;
        $aa=0;
        $roles =DB::table('project_user')
                ->pluck('user_id');
        $users = DB::table('users')->whereNotIn('id', $roles)
                ->pluck('id');
        
            foreach($users as $user){
                $roleId=DB::table('role_user')->where('user_id', $user)->first()->role_id;
                $role=DB::table('roles')->where('id',$roleId)->first()->name;
                switch ($role) {
                    case "architecture":
                    $aa=$aa+1;
                    break;

                    default:
                    $other=$other+1;
               }
    
            } 
        
           
            $userArchi=(DB::table('role_user')->where('role_id',7)
                        ->pluck('user_id'));
            $workArchi=DB::table('project_user')->whereIn('user_id',$userArchi)
                        ->pluck('user_id');
        
      
            $collection = collect($userArchi);
            $notwork = $collection->diff($workArchi);
            $data[]=null;
       
       if($reqArchi>$aa){
                $dif=$reqArchi-$aa;
                $resultArchi='Hired '.(string)$dif.' architectures' ;
                for($i=1;$i<=$aa;$i++){
                    DB::table('project_user')->insert(
                        ['user_id' =>$notwork[$i], 
                        'project_id' =>$reqproject]
                    );
                $data[$i]=$notwork[$i].' you Assign to project';
            }
    }else{
        
        for($i=1;$i<=$reqArchi;$i++){
            DB::table('project_user')->insert(
                ['user_id' =>$notwork[$i], 
                'project_id' =>$reqproject]
              );

              $data[$i]=$notwork[$i].' you Assign to project';
            }
            $resultArchi="Assign success";
        }
        return response()->json([
            'message'=>$resultArchi,
            "list"=>$data

        ]); $data;
    }


public function assignBa(Request $request){
        $reqBa=$request['ba'];
        $reqproject=$request['project_id'];
        $other=0;
        $ba=0;
        $roles =DB::table('project_user')
                ->pluck('user_id');
        $users = DB::table('users')->whereNotIn('id', $roles)
                ->pluck('id');
        
            foreach($users as $user){
                $roleId=DB::table('role_user')->where('user_id', $user)->first()->role_id;
                $role=DB::table('roles')->where('id',$roleId)->first()->name;
                switch ($role) {
                    case "business-analyst":
                    $ba=$ba+1;
                    break;

                    default:
                    $other=$other+1;
               }
    
            } 
        
           
            $userBa=DB::table('role_user')->where('role_id',6)
                        ->pluck('user_id');
            $workBa=DB::table('project_user')->whereIn('user_id',$userBa)
                        ->pluck('user_id');
        
      
            $collection = collect($userBa);
            $notwork = $collection->diff($workBa);
            $data[]=null;
       
       if($reqBa>$ba){
                $dif=$reqBa-$ba;
                $resultBa='Hired '.(string)$dif.' business-analyst' ;
                for($i=1;$i<=$ba;$i++){
                    DB::table('project_user')->insert(
                        ['user_id' =>$notwork[$i], 
                        'project_id' =>$reqproject]
                    );
                $data[$i]=$notwork[$i].' you Assign to project';
            }
    }else{
        
        for($i=1;$i<=$reqBa;$i++){
            DB::table('project_user')->insert(
                ['user_id' =>$notwork[$i], 
                'project_id' =>$reqproject]
              );

              $data[$i]=$notwork[$i].' you Assign to project';
            }
            $resultBa="Assign success";
        }
        return response()->json([
            'message'=>$resultBa,
            'list'=>$data

        ]); 
    }
 

public function assignQa(Request $request){
        $reqQa=$request['qa'];
        $reqproject=$request['project_id'];
        $other=0;
        $qa=0;
        $roles =DB::table('project_user')
                ->pluck('user_id');
        $users = DB::table('users')->whereNotIn('id', $roles)
                ->pluck('id');
        
            foreach($users as $user){
                $roleId=DB::table('role_user')->where('user_id', $user)->first()->role_id;
                $role=DB::table('roles')->where('id',$roleId)->first()->name;
                switch ($role) {
                    case "quality-assurance":
                    $qa=$qa+1;
                    break;
                    

                    default:
                    $other=$other+1;
               }
    
            } 
        
           
            $userqa=DB::table('role_user')->where('role_id',8)
                        ->pluck('user_id');
            $workqa=DB::table('project_user')->whereIn('user_id',$userqa)
                        ->pluck('user_id');
        
      
            $collection = collect($userqa);
            $notwork = $collection->diff($workqa);
            $data[]=null;
       
       if($reqQa>$ba){
                $dif=$reqQa-$qa;
                $resultQa='Hired '.(string)$dif.' quality-assurance' ;
                for($i=1;$i<=$qa;$i++){
                    DB::table('project_user')->insert(
                        ['user_id' =>$notwork[$i], 
                        'project_id' =>$reqproject]
                    );
                $data[$i]=$notwork[$i].' you Assign to project';
            }
    }else{
        
        for($i=1;$i<=$reqQa;$i++){
            DB::table('project_user')->insert(
                ['user_id' =>$notwork[$i], 
                'project_id' =>$reqproject]
              );

              $data[$i]=$notwork[$i].' you Assign to project';
            }
            $resultQa="Assign success";
        }
        return response()->json([
            'message'=>$resultQa,
            'list'=>$data

        ]); 
    }


public function assignDev(Request $request){
        $reqDev=$request['dev'];
        $reqproject=$request['project_id'];
        $other=0;
        $dev=0;
        $roles =DB::table('project_user')
                ->pluck('user_id');
        $users = DB::table('users')->whereNotIn('id', $roles)
                ->pluck('id');
        
            foreach($users as $user){
                $roleId=DB::table('role_user')->where('user_id', $user)->first()->role_id;
                $role=DB::table('roles')->where('id',$roleId)->first()->name;
                switch ($role) {
                    case "developer":
                    $dev=$dev+1;
                    break;
                    

                    default:
                    $other=$other+1;
               }
    
            } 
        
           
            $userDev=DB::table('role_user')->where('role_id',4)
                        ->pluck('user_id');
            $workDev=DB::table('project_user')->whereIn('user_id',$userDev)
                        ->pluck('user_id');
        
      
            $collection = collect($userDev);
            $notwork = $collection->diff($workDev);
            $data[]=null;
       
       if($reqDev>$dev){
                $dif=$reqDev-$dev;
                $resultDev='Hired '.(string)$dif.' developers' ;
                for($i=1;$i<=$qa;$i++){
                    DB::table('project_user')->insert(
                        ['user_id' =>$notwork[$i], 
                        'project_id' =>$reqproject]
                    );
                $data[$i]=$notwork[$i].' you Assign to project';
            }
    }else{
        
        for($i=1;$i<=$reqDev;$i++){
            DB::table('project_user')->insert(
                ['user_id' =>$notwork[$i], 
                'project_id' =>$reqproject]
              );

              $data[$i]=$notwork[$i].' you Assign to project';
            }
            $resultDev="Assign success";
        }
        return response()->json([
            'message'=>$resultDev,
            'list'=>$data

        ]); 
    }
    public function assignEmp(Request $request){
        $projctId=$request['project_id'];
        $userID=$request['id'];
        DB::table('project_user')->insert(
            ['user_id' =>$userID, 
            'project_id' => $projctId]
          );
          return response()->json([
            'status'=>'success',
            'message'=>'you assign to the project'
            

        ]);
    }

}
