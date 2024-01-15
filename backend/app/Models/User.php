<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\ECOMMERCE\Listing;
use App\Models\SES\Term;
use App\Models\SES\Faculty;
use App\Models\SES\Payment;
use App\Models\SES\Section;
use App\Models\SES\Subject;
use App\Models\SES\Enrollment;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function enrollment() {
        return $this->hasOne(Enrollment::class, 'user_id');
    }

    public function faculty() {
        return $this->hasOne(Faculty::class, 'user_id');
    }

    public function payment() {
        return $this->hasOne(Payment::class, 'user_id');
    }

    public function section() {
        return $this->hasOne(Section::class, 'user_id');
    }

    public function subject() {
        return $this->hasOne(Subject::class, 'user_id');
    }

    public function term() {
        return $this->hasOne(Term::class, 'user_id');
    }

    public function listing() {
        return $this->hasOne(Listing::class, 'user_id');
    }
}
