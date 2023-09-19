<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\CreateUserRequest;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Resources\Admin\UserListResource;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function getUsers(Request $request): Response
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }

        return Inertia::render('Admin/Index', [
            'users' => UserListResource::collection(User::all()),
        ]);
    }

    public function createUser(CreateUserRequest $request): RedirectResponse
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }
        User::create($request->validated());

        return to_route('admin.users');
    }

    public function editUser(Request $request, string $userId): Response
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }

        return Inertia::render('Admin/User/User', [
            'users' => UserResource::collection(User::where(['id' => $userId])->get()),
        ]);
    }

    public function updateUser(UpdateUserRequest $request, string $userId): RedirectResponse
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }
        $user = User::findOrFail($userId);

        if ($request->validated()) {
            $user->username = $request->username;
            $user->company  = $request->company;
            $user->has_view_documents = $request->hasViewDocuments;
            $user->has_modify_documents = $request->hasModifyDocuments;
            $user->has_modify_gallery = $request->hasModifyGallery;
            $user->has_admin = $request->hasAdmin;
            $user->save();
        }

        return to_route('admin.user.get', ['userId' => $userId]);
    }

    public function updateUserPassword(Request $request, int $userId): RedirectResponse
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }
        $validated = $request->validate([
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $user = User::findOrFail($userId);

        $user->password = $validated['password'];
        $user->save();

        return redirect('/admin/user/' . $userId);
    }

    public function destroyUser(Request $request, int $userId): RedirectResponse
    {
        if ($request->user()->cannot('admin')) {
            abort(403);
        }
        User::destroy($userId);

        return to_route('admin.users');
    }

}
