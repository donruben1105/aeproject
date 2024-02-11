<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('house_holds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('gender');
            $table->string('birthdate');
            $table->string('birth_place');
            $table->string('household_number');
            $table->string('blood_type');
            $table->string('civil_status');
            $table->string('length_of_stay');
            $table->string('occupation');
            $table->string('monthly_income');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('house_holds');
    }
};
