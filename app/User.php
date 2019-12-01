<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use Notifiable, EntrustUserTrait;

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
    public function regenerateSecret($uid = null) {
        if ($uid == null) {
            $uid = $this->getAttributeValue('id');
        }
        return static::query()->where('id', $uid)->update(['apikey' => str_random(28)]);
    }

    /**
     * @param $apikey
     * @return User
     */
    public function findByKey($apikey) {
        return $this->where('apikey', $apikey)->first();
    }
    public function scopewithRoleSettings($query) {
        return $query->with(['roles' => function($q) {
            $q->with(['settings' => function($q1) {
                $q1->orderBy('id', 'asc');
            }]);
        }]);
    }
}
