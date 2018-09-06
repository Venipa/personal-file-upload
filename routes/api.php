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

Route::post('/upload', 'UploadController@upload')->name('api:upload:add');
Route::get('/delete/upload/{token}', 'UploadController@delupload')->name('api:upload:delete');

Route::post('/link', 'ShortenerController@shorten')->name('api:link:add');
Route::get('/delete/link/{token}', 'ShortenerController@delLink')->name('api:link:delete');
