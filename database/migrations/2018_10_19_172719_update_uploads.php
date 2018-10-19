<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUploads extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        mkdir(storage_path('app/tmp'));
        mkdir(storage_path('app/thumbnails'));
        Schema::table('uploads', function($table)
        {
            $table->string('thumb_token', 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('uploads', function($table) {
            $table->dropColumn('thumb_token');
        });
    }
}
