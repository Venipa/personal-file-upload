<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Venipa',
            'password' => \Illuminate\Support\Facades\Hash::make('admin'),
            'email' => 'admin@venipa.net',
            'apikey' => str_random(20)
        ]);
    }
}
