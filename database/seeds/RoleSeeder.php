<?php

use App\Permission;
use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);
        $permissions = [
            'administrator' => 'Can Access anything',
            'upload.file' => 'Can Upload',
            'delete.file' => 'Can Delete',
            'any.delete.file' => 'Can Delete any File',
            'access.api' => 'Can Access API',
            'access.files' => 'Can Access Files',
            'access.beta' => 'Can Access Beta',
            'access.preview' => 'Can Access Preview Features',
            'access.admin' => 'Can Access Admin Panel',
            'is.premium' => 'Can Access Premium Features',
            'ticket.appeal' => 'Can appeal to Tickets'
        ];
        foreach($permissions as $pk => $pv) {
            $permissions[$pk] = Permission::create([
                'name' => $pk,
                'display_name' => $pv
            ]);
        }
        $role = Role::create([
            'name' => 'admin',
            'display_name' => 'Administrator',
            'description' => 'Administrator of the site'
        ]);
        $role->attachPermission($permissions['administrator']);
        $role->settings()->create([
            'maxFilesize' => null,
            'maxStorage' => null
        ]);
        $pre = Role::create([
            'name' => 'pre_access',
            'display_name' => 'Pre Access'
        ]);
        $pre->settings()->create([
            'maxFilesize' => 1024 * 1024 * 1024,
            'maxStorage' => 1024 * 1024 * 1024 * 20
        ]);
        $defaultPerm = [
            $permissions['upload.file'],
            $permissions['delete.file'],
            $permissions['access.files'],
            $permissions['access.api'],
            $permissions['ticket.appeal']
        ];
        $pre->attachPermissions($defaultPerm);
        $pre->attachPermissions([$permissions['access.preview'], $permissions['access.beta']]);
        $premium = Role::create([
            'name' => 'premium',
            'display_name' => 'Premium'
        ]);
        $premium->settings()->create([
            'maxFilesize' => 1024 * 1024 * 1024,
            'maxStorage' => 1024 * 1024 * 1024 * 20
        ]);
        $premium->attachPermissions($defaultPerm);
        $premium->attachPermission($permissions['is.premium']);
        $member = Role::create([
            'name' => 'member',
            'display_name' => 'Member'
        ]);
        $member->settings()->create([
            'maxFilesize' => 1024 * 1024 * 100,
            'maxStorage' => 1024 * 1024 * 1024 * 5
        ]);
        $member->attachPermissions($defaultPerm);
        $banned = Role::create([
            'name' => 'banned',
            'display_name' => 'Banned'
        ]);
        $banned->settings()->create([
            'maxFilesize' => 0,
            'maxStorage' => 0
        ]);
        $banned->attachPermissions([$permissions['ticket.appeal']]);
        $user->attachRole($role);
    }
}
