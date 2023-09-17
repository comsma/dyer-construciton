<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PlanController extends Controller
{

    function getPlans(): Response
    {
        return Inertia::render('Plans/Index', []);
    }
    //
}
