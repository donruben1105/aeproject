<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SES\TermController;
use App\Http\Controllers\BRGY\StaffController;
use App\Http\Controllers\SES\FacultyController;
use App\Http\Controllers\SES\SectionController;
use App\Http\Controllers\SES\SubjectController;
use App\Http\Controllers\BRGY\OfficialController;
use App\Http\Controllers\BRGY\HouseHoldController;
use App\Http\Controllers\BRGY\ResidentController;
use App\Http\Controllers\SES\EnrollmentController;
use App\Http\Controllers\ECOMMERCE\ListingController;
use App\Http\Controllers\ECOMMERCE\PaymentController;
use App\Http\Controllers\ECOMMERCE\ContactUsController;
use App\Http\Controllers\ECOMMERCE\ECheckoutController;
use App\Http\Controllers\ECOMMERCE\ListingDetailsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('SES')->group(function() {
    Route::apiResource('/enrollment', EnrollmentController::class);
    Route::apiResource('/section', SectionController::class);
    Route::apiResource('/term', TermController::class);
    Route::apiResource('/subject', SubjectController::class);
    Route::apiResource('/faculty', FacultyController::class);
});

Route::prefix('ECOMMERCE')->group(function() {
    Route::apiResource('/listing', ListingController::class);
    Route::apiResource('/checkout', ECheckoutController::class);
    Route::apiResource('/contact', ContactUsController::class);
});

Route::prefix('BRGY')->group(function() {
    Route::apiResource('/official', OfficialController::class);
    Route::apiResource('/staff', StaffController::class);
    Route::apiResource('/house/hold', HouseHoldController::class);
    Route::apiResource('/resident', ResidentController::class);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
