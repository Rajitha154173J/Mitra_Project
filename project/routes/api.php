<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('login', 'api\LoginController@login');

Route::group(['middleware' => 'auth:api'], function()
{
    Route::post('get-details', 'api\LoginController@getDetails');

    Route::get('/notifications', 'api\UserController@getNotifications');
    Route::get('/readNotification', 'api\UserController@readNotification');

    // User routes
    Route::group(['prefix' => '/users/'], function () {

        Route::get('/', 'api\UserController@index');

        Route::get('/{user}', 'api\UserController@show');

        Route::post('/', 'api\UserController@store');

        Route::patch('/{user}', 'api\UserController@update');

        Route::delete('/{user}', 'api\UserController@destroy');

    });

    // projects routes
    Route::group(['prefix' => '/projects/'], function () {

                Route::get('/', 'api\ProjectController@index');
                Route::get('/allproject', 'api\ProjectController@allproject');
                Route::get('/getprojects', 'api\ProjectController@getprojects');
                Route::get('/{project}', 'api\ProjectController@show');
                Route::get('/oneproject/{project}','api\ProjectController@getoneproject');
                Route::post('/', 'api\ProjectController@store');
                Route::patch('/edit/{project}', 'api\ProjectController@update');
                Route::delete('/{project}', 'api\ProjectController@destroy');

                //payout
                Route::get('/payout','api\PayoutsController@index');
                Route::get('/payout/{payment}', 'api\ProjectController@show');
                Route::post('/payout', 'api\PayoutsController@store');
                Route::patch('/payout/{payment}', 'api\PayoutsController@update');
                Route::delete('/payout/{payment}', 'api\PayoutsController@destroy');
            
            
        // Phases routes
       
       
            
                Route::group(['prefix' => '/{project}/phase'], function() {

                    Route::get('/', 'api\PhaseController@index');

                    Route::get('/{phase}', 'api\PhaseController@show');

                    Route::post('/', 'api\PhaseController@store');

                    Route::patch('/edit/{phase}', 'api\PhaseController@update');

                    Route::delete('/', 'api\PhaseController@destroy');

                });

    });

    Route::post('updatedContact','api\MethodController@updatedContact');
    Route::post('updatedSkill','api\MethodController@updatedSkill');
    Route::post('resetpassword','api\MethodController@resetpassword');
    Route::get('showdeadline/{id}','api\MethodController@showdeadline');

    Route::get('freeDev','api\MethodController@freeDeveloperName');
    Route::get('freeQa','api\MethodController@freeQaName');
    Route::get('freeBa','api\MethodController@freeBaName');
    Route::get('freeArchi','api\MethodController@freeArchiName');


    Route::get('freeEmployeeDetail','api\MethodController@freeEmployeeDetail');
    Route::get('showRequest','api\MethodController@showRequest');
    Route::get('releaseEmployee','api\MethodController@releaseEmployee');
    
    Route::post('assignArchi', 'api\AssignController@assignArchi');
    Route::post('assignDev', 'api\AssignController@assignDev');
    Route::post('assignQa', 'api\AssignController@assignQa');
    Route::post('assignBa', 'api\AssignController@assignBa');
    Route::post('assignEmp', 'api\AssignController@assignEmp');
    
    Route::post('logout', 'api\LoginController@logout');
});
   