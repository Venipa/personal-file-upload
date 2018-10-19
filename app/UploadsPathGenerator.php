<?php

namespace App;

use Spatie\MediaLibrary\Models\Media;
use Spatie\MediaLibrary\PathGenerator\PathGenerator;

class UploadsPathGenerator implements PathGenerator {

    public function getPath(Media $media): string
    {
        $model = $media->model()->first();
        $table = $media->collection_name;
        return $table ."/" . $model->thumb_token;
    }

    public function getPathForConversions(Media $media): string
    {
        return $this->getPath($media).'/c/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        // TODO: Implement getPathForResponsiveImages() method.
    }
}