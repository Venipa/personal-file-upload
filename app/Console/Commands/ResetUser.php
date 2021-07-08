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
    protected $signature = 'user:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset User';

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
        $userEmail = $this->ask('Whats the email for reset?');
        $user = null;
        if (($user = User::where('email', $userEmail)->first()) != null) {
            return $this->error('User does not exist');
        }
        $pw = str_random(20);
        $user->password = Hash::make($pw);
        $user->apikey = str_random(20);
        $user->save();
        $this->info('Account has been updated: ');
        $this->table(['Email', 'Password', 'Api Key'], [
            [
                "email" => $user->email,
                "password" => $pw,
                "api key" => $user->apikey
            ]
        ]);

    }
}
