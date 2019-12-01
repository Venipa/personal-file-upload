<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
    public function settings() {
        return $this->hasOne(RoleSettings::class, 'roleId', 'id');
    }
    /**
     * createSettings function
     *
     * @param array $attributes
     * @return RoleSettings
     */
    public function createSettings($attributes = []) {
        return $this->settings()->create($attributes);
    }
}
