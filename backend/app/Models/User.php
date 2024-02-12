<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\SES\Term;
use App\Models\BRGY\Staff;
use App\Models\SES\Faculty;
use App\Models\SES\Payment;
use App\Models\SES\Section;
use App\Models\SES\Subject;
use App\Models\BRGY\Official;
use App\Models\BRGY\Resident;
use App\Models\BRGY\HouseHold;
use App\Models\SES\Enrollment;
use App\Models\ECOMMERCE\Listing;
use Laravel\Sanctum\HasApiTokens;
use App\Models\ECOMMERCE\ContactUs;
use App\Models\ECOMMERCE\ECheckout;
use App\Models\ECOMMERCE\ListingDetails;
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

    public function contact() {
        return $this->hasOne(ContactUs::class, 'user_id');
    }

    public function checkout() {
        return $this->hasOne(ECheckout::class, 'user_id');
    }

    public function official() {
        return $this->hasOne(Official::class, 'user_id');
    }

    public function staff() {
        return $this->hasOne(Staff::class, 'user_id');
    }

    public function houseHold() {
        return $this->hasOne(HouseHold::class, 'user_id');
    }

    public function resident() {
        return $this->hasOne(Resident::class, 'user_id');
    }
}
