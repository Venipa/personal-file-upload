<?php

namespace App\Console\Commands;

use App\Role;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create User';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $userEmail = $this->ask('Whats your email?');
        if (User::where('email', $userEmail)->count() > 0) {
            return $this->error('User already exists with this email');
        }
        $userName = $this->ask('Your desired username:');
        $pw = str_random(20);
        $user = User::create([
            'name' => $userName,
            'email' => $userEmail,
            'password' => Hash::make($pw),
            'apikey' => str_random(20)
        ]);
        $user->roles()->attach(Role::where('name', 'member')->first()->id);
        if ($user == null) {
            return $this->error('Error while trying to create the user');
        }
        $this->info('Your account has been created: ');
        $this->table(['Email', 'Password', 'Api Key'], [
            [
                "email" => $user->email,
                "password" => $pw,
                "api key" => $user->apikey
            ]
        ]);

    }
}
