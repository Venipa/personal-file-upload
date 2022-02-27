<?php

namespace App;

use Carbon\CarbonInterval;
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
    public function getDuration() {
      return CarbonInterval::seconds($this->wait)->forHumans();
    }
}
