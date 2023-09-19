<?php

namespace App\Http\Controllers;

use App\Http\Resources\Plan\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class PlanController extends Controller
{
    public function getPlans(Request $request): Response
    {
        if ($request->user()->cannot('view-documents')) {
            abort(403);
        }

        $id = Auth::id();

        return Inertia::render('Plans/Index', [
            'users' => UserResource::collection(User::where(['id' => $id])->get()),
        ]);
    }

}
