<?php

namespace App\Providers;

use GrahamCampbell\GitLab\Facades\GitLab;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /*View::share('git', (object)Cache::get('gitlab_project', function() {
            try {
                return GitLab::connection('main')->projects()->show(config('gitlab.defaultProjectId'));
            } catch(\Exception $e) {
                return null;
            }
        }, 5));*/
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
