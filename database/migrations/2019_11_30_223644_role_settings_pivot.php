<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RoleSettingsPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_settings', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('roleId');
            $table->unsignedBigInteger('maxStorage')->nullable();
            $table->unsignedBigInteger('maxFilesize')->nullable();
            $table->timestamps();
            $table->unique('roleId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_settings');
    }
}
