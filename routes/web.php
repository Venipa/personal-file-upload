<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('index');

Route::get('/f/{token}/{slug?}', 'UploadController@getfile')->name('api:upload:get');
Route::get('/i/{token}/{slug?}', 'UploadController@getInfo')->name('api:upload:info');
Route::get('/s/{token}/{slug?}', 'ShortenerController@getLink')->name('api:link:get');
Route::post('/s/{token}/{slug?}', 'ShortenerController@checkPass')->name('api:link:post');

Route::any('login', 'HomeController@login')->name('login');
Route::middleware(['auth', 'web'])->group(function() {
    Route::get('files', 'HomeController@files')->name('files');
    Route::get('links', 'ShortenerController@links')->name('links');
    Route::get('create/link', 'ShortenerController@createLink')->name('link:add');
    Route::post('create/link', 'ShortenerController@postLink');
});
