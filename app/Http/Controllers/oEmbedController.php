<?php

namespace App\Http\Controllers;

use App\Uploads;
use Illuminate\Support\Facades\Validator;

class oEmbedController extends Controller
{
    private $version;
    private $cacheAge;
    public function __construct()
    {
        $this->version = "1.0";
        $this->cacheAge = 3600;
    }

    public function upload($token, $slug = null) {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->with('user')->first();
        $data = [
            'type' => 'rich',
            'version' => $this->version,
            'title' => $file->filename,
            'author_name' => $file->user->name,
            'author_url' => 'https://venipa.net',
            'provider_name' => config('app.name'),
            'provider_url' => url('/'),
            'cache_age' => $this->cacheAge,
            'width' =>  '1280',
            'height' => '720',
            'thumbnail_url' => $file->thumb_token != null ? $file->getLatestThumbnailUrl() : $file->getFileUrl(),
            'referrer' => ''
        ];
        if($file->thumb_token != null || preg_match('/audio\//', $file->filemime)) {
            $data['html'] = '<iframe src="' . $file->getEmbedUrl() . '" frameborder="0" allowfullscreen />';
        } else if(preg_match('/image\//', $file->filemime)) {
            $data['html'] = '<img src="' . $file->getFileUrl() . '" frameborder="0" allowfullscreen />';
        }
        return response()->json($data);
    }
}
