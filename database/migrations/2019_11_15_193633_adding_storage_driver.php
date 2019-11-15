<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddingStorageDriver extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('uploads', function (Blueprint $table) {
            $table->string('driver')->default(config('filesystems.defaultUpload'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('uploads', function(Blueprint $table) {
            $table->dropColumn('driver');
        });
    }
}
