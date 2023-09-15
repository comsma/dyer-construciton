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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('/jobs', [\App\Http\Controllers\JobController::class, 'listJobs'])->name('jobs.list');
    Route::post('/jobs', [\App\Http\Controllers\JobController::class, 'create'])->name('jobs.create');

    Route::get('/jobs/{id}', [\App\Http\Controllers\JobController::class, 'view']);
    Route::delete('/jobs/{id}', [\App\Http\Controllers\JobController::class, 'destroy'])->name('jobs.delete');

    Route::post('/jobs/{job_id}/documents', [\App\Http\Controllers\DocumentsController::class, 'create']);
    Route::get('/documents', [\App\Http\Controllers\DocumentsController::class, 'listDocuments']);

    Route::get('/jobs/{job_id}/documents/{document_id}', [\App\Http\Controllers\DocumentsController::class, 'view']);
    Route::delete('/jobs/{job_id}/documents/{document_id}', [\App\Http\Controllers\DocumentsController::class, 'destroy']);

    Route::get('/admin/user/{id}', [\App\Http\Controllers\AdminController::class, 'editUser'])->name('admin.user.edit');
    Route::patch('/admin/user/{id}', [\App\Http\Controllers\AdminController::class, 'updateUser'])->name('admin.user.update');


});




require __DIR__.'/auth.php';
