<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Uploads extends Model
{
    protected $table = 'uploads';
    protected $guarded = [
        'id'
    ];
    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
