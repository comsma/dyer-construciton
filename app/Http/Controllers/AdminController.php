<?php

namespace App\Http\Controllers;

use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    function createUser() {

    }

    function editUser(string $id): Response {
        return Inertia::render('Admin/User', [
            'users' => UserResource::collection(User::where(['id' => $id])->get())
        ]);
    }

    function updateUser(string $id): RedirectResponse {

    }
    //
}
