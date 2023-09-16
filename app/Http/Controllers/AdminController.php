<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\CreateUserRequest;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use function Termwind\render;

class AdminController extends Controller
{
    function getUsers(): Response {
        return Inertia::render('Admin/Index', [
            'users' => UserResource::collection(User::all())
        ]);
    }
    function createUser(CreateUserRequest $request): RedirectResponse {

        User::create($request->validated());

        return to_route('admin.users');
    }

    function editUser(string $userId): Response {
        return Inertia::render('Admin/User', [
            'users' => UserResource::collection(User::where(['id' => $userId])->get())
        ]);
    }

    function updateUser(UpdateUserRequest $request, string $userId): RedirectResponse
    {
        $user = User::findOrFail($userId);

        if($request->validated()){
            $user->username = $request->username;
            $user->company  = $request->company;
            $user->has_view_documents = $request->hasViewDocuments;
            $user->has_modify_documents = $request->hasModifyDocuments;
            $user->has_modify_gallery = $request->hasModifyGallery;
            $user->has_admin = $request->hasAdmin;
            $user->save();
        }



        return to_route('admin.user.get', ['userId'=>$userId]);
    }

    function updateUserPassword(Request $request, int $userId): RedirectResponse
    {
        $validated = $request->validate([
            'password' => ['required', Password::defaults(), 'confirmed']
        ]);

        $user = User::findOrFail($userId);

        $user->password = $validated['password'];
        $user->save();

        return redirect('/admin/user/'.$userId);
    }

    function destroyUser(int $userId): RedirectResponse
    {
        User::destroy($userId);

        return to_route('admin.users');
    }
    //
}
