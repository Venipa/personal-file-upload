<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    protected $guarded = ['id'];

    public function getUrlName() {
        return basename($this->url);
    }
    public function getSlug() {
        return str_slug(str_replace('.', '-', $this->getUrlName()));
    }
}
