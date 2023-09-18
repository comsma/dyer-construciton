<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->to('/login');
});

Route::get('/dashboard', [\App\Http\Controllers\JobController::class, 'listJobs'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function (): void {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('/jobs', [\App\Http\Controllers\JobController::class, 'listJobs'])->name('jobs.list');
    Route::post('/jobs', [\App\Http\Controllers\JobController::class, 'create'])->name('jobs.create');

    Route::get('/jobs/{job}', [\App\Http\Controllers\JobController::class, 'getJob'])->name('jobs.get');
    Route::patch('/jobs/{jobId}', [\App\Http\Controllers\JobController::class, 'updateJob'])->name('job.edit');
    Route::delete('/jobs/{id}', [\App\Http\Controllers\JobController::class, 'destroy'])->name('jobs.delete');


    Route::post('/jobs/{job}/user/{user}', [\App\Http\Controllers\JobController::class, 'addUserOnJob'])->name('jobs.user.add');
    Route::post('/jobs/{job}/user', [\App\Http\Controllers\JobController::class, 'createUserOnJob'])->name('jobs.user.create');
    Route::delete('/jobs/{job}/user/{user}', [\App\Http\Controllers\JobController::class, 'detachUserOnJob'])->name('jobs.user.detach');

    Route::post('/jobs/{job}/documents', [\App\Http\Controllers\DocumentsController::class, 'create'])->name('job.document.create');
    Route::get('/jobs/{job}/documents/{document}', [\App\Http\Controllers\DocumentsController::class, 'view'])->name('job.document.view');
    Route::delete('/jobs/{job}/documents/{documentId}', [\App\Http\Controllers\DocumentsController::class, 'destroy'])->name('job.documents.delete');

    Route::get('/admin/users', [\App\Http\Controllers\AdminController::class, 'getUsers'])->name('admin.users');

    Route::get('/admin/user/{userId}', [\App\Http\Controllers\AdminController::class, 'editUser'])->name('admin.user.get');
    Route::patch('/admin/user/{userId}', [\App\Http\Controllers\AdminController::class, 'updateUser'])->name('admin.user.update');
    Route::delete('/admin/user/{userId}', [\App\Http\Controllers\AdminController::class, 'destroyUser'])->name('admin.user.destroy');
    Route::post('/admin/user', [\App\Http\Controllers\AdminController::class, 'createUser'])->name('admin.user.create');

    Route::post('/admin/user/{userId}/password', [\App\Http\Controllers\AdminController::class, 'updateUserPassword'])->name('admin.user.password.update');

    Route::get('/plans', [\App\Http\Controllers\PlanController::class, 'getPlans'])->name('plan.list');


});




require __DIR__ . '/auth.php';
