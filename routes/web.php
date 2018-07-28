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

Route::any('login', 'HomeController@login')->name('login');
Route::middleware(['auth', 'web'])->group(function() {
    Route::get('files', 'HomeController@files')->name('files');
});
