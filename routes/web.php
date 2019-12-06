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

use Illuminate\Support\Facades\Route;

Route::group(config('app.env') == 'local' ? [] : ['domain' => config('app.domain'), 'scheme' => ($scheme = config('app.url')) != null && strpos($scheme, 'https://') == 0 ? 'https' : 'http'], function () {
    Route::get('/', 'HomeController@index')->name('index');

    Route::get('/thumb/{token}', 'UploadController@getThumb')->name('api:thumb:get');
    Route::get('/f/{token}/{slug?}', 'UploadController@getfile')->name('api:upload:get');
    Route::get('/embed/{token}/{slug?}', 'UploadController@videoEmbed')->name('api:upload:embed');
    Route::get('/i/{token}/{slug?}', 'UploadController@getInfo')->name('api:upload:info');
    Route::middleware('web')->post('/request/download/{token}', 'UploadController@getDownload')->name('api:upload:req:download');
    Route::get('/s/{token}/{slug?}', 'ShortenerController@getLink')->name('api:link:get');
    Route::post('/s/{token}/{slug?}', 'ShortenerController@checkPass')->name('api:link:post');


    // Guest Only
    Route::middleware('guest')->group(function() {
        Route::get('login', 'HomeController@login')->name('login');
    });
    Route::middleware(['auth', 'web'])->group(function () {
        Route::get('dashboard', 'HomeController@dashboard')->name('dashboard');
        Route::get('account', 'HomeController@account')->name('account');
        Route::get('logout', 'HomeController@logout')->name('logout');
        Route::get('files', 'HomeController@files')->middleware('permission:access.files|administrator')->name('files');
        Route::get('links', 'ShortenerController@links')->name('links');
        Route::get('create/link', 'ShortenerController@createLink')->name('link:add');
        Route::post('create/link', 'ShortenerController@postLink');
    });
    Route::prefix('oembed/v1')->group(function () {
        Route::get('upload/{token}/{slug?}', 'oEmbedController@upload')->name('api:oembed:upload');
    });
});
Route::prefix('api/v1')->name('api:v1:')->middleware(['web', 'api'])->group(function() {
    Route::middleware('permission:administrator|access.api')->group(function() {
        Route::prefix('user')->name('user:')->middleware(['auth', 'permission:administrator|access.files'])->group(function() {
            Route::get('/', 'WebAPI\UserController@getUser')->name('get');
            Route::get('files', 'WebAPI\UserController@getFiles')->name('files');
            Route::post('gen-secret', 'WebAPI\UserController@genSecret')->name('genSecret');
            Route::post('file/delete', 'WebAPI\UserController@deleteUserFile')->name('deleteFile');
            Route::get('statistics', 'WebAPI\UserController@getStats')->name('stats');
            Route::post('update/account', 'WebAPI\UserController@updateAccount')->name('account:update');
        });
        Route::middleware('permission:administrator|upload.file')->post('upload', 'WebAPI\UserController@upload')->name('upload');
    });
    Route::prefix('auth')->middleware('auth')->name('auth:')->post('logout', 'WebAPI\AuthController@logout')->name('logout');
    Route::prefix('auth')->name('auth:')->middleware('guest')->group(function() {
        Route::post('login', 'WebAPI\AuthController@login')->name('login');
    });
});