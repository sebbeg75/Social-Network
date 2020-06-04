<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('users')->group(function () {
    Route::middleware('auth:api')->get('', 'UserController@getAll');
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/logout', 'UserController@logout');
    Route::get('/getAll', 'UserController@getAll');
});
Route::prefix('posts')->group(function () {
    Route::get('/', 'PostController@index');
    Route::get('/getAll', 'PostController@getAll');
    Route::post('/addNew', 'PostController@insert');
});
