<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('users')->group(function() {
    Route::post('/', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/logout', 'UserController@logout');
    Route::get('/getAll', 'UserController@getAll');
});
Route::prefix('posts')->group(function () {
    Route::get('/', 'PostController@index');
    Route::get('/getAll', 'PostController@getAll');
    Route::post('/addNew', 'PostController@create');
});
