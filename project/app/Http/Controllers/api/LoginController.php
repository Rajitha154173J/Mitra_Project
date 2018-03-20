<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        $attempt = Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ]);

        if ($attempt)
        {
            $email=$request->email;
            $userID=DB::table('users')->where('email',$email)->first()->id;
            $roleId=DB::table('role_user')->where('user_id',$userID)->first()->role_id;
            $role=DB::table('roles')->where('id',$roleId)->first()->name;
            
            if($role=="admin"){
                $user = Auth::user();

                $success['token'] = $user->createToken('mitra')->accessToken;

                return response()->json([
                    'status' => 'success',
                    'data' => $success,
                    'role'=>'admin'
                ], 200);
            }elseif($role=="human-resource-manager"){
                $user = Auth::user();

                $success['token'] = $user->createToken('mitra')->accessToken;

                return response()->json([
                    'status' => 'success',
                    'data' => $success,
                    'role'=>'human-resource-manager'
                ], 200);
            }elseif($role=="resource-manager"){
                $user = Auth::user();

                $success['token'] = $user->createToken('mitra')->accessToken;

                return response()->json([
                    'status' => 'success',
                    'data' => $success,
                    'role'=>'resource-manager'
                ], 200);
            }elseif($role=="project-manager"){
                $user = Auth::user();

                $success['token'] = $user->createToken('mitra')->accessToken;

                return response()->json([
                    'status' => 'success',
                    'data' => $success,
                    'role'=>'project-manager'
                ], 200);
            }
            else{
                $user = Auth::user();

                $success['token'] = $user->createToken('mitra')->accessToken;

                return response()->json([
                    'status' => 'success',
                    'data' => $success,
                    'role'=>'developer'
                ], 200);
            }
        }
        else
        {
            return response()->json([
                'status' => 'error',
                'message' => 'unable to authenticate.'
            ], 401);
        }

    }

    public function logout(Request $request)
    {

        $request->user()->token()->revoke();

        $json = [
            'status' => 'success',
            'message' => 'You are Logged out.',
        ];

        return response()->json($json, 200);

    }

    public function getDetails()
    {
        
        $user = Auth::user();
        $id=$user->id;
        $roleId=DB::table('role_user')->where('user_id', $id)->first()->role_id;
        $role=DB::table('roles')->where('id',$roleId)->first()->name;
        
        return response()->json([
            'status' => 'success',
            'data' =>  $user,
            'role'=>$role ]);

    }
}
