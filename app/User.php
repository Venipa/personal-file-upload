<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'apikey'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function files() {
        return $this->hasMany(Uploads::class, 'user_id', 'id');
    }
    public function links() {
        return $this->hasMany(Links::class, 'userId', 'id');
    }

    /**
     * @param $apikey
     * @return User
     */
    public function findByKey($apikey) {
        return $this->where('apikey', $apikey)->first();
    }
}
