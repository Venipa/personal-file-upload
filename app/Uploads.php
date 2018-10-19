<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\MediaLibrary\PathGenerator\PathGenerator;

class Uploads extends Model implements HasMedia
{

    use HasMediaTrait;
    protected $table = 'uploads';

    protected $guarded = [
        'id'
    ];
    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function setThumbnail(UploadedFile $file, $token = null) {
        $token = $token ?? str_random();
        $this->thumb_token = $token;
        $this->addMedia($file)->setFileName($token)->toMediaCollection('thumbnails');
        $this->save();
    }
    public function getLatestThumbnail() {
        return $this->getMedia('thumbnails')->last();
    }
    public function getLatestThumbnailUrl() {
        return route('api:thumb:get', $this->thumb_token);
    }
}
