<?php

namespace App\Http\Controllers;

use App\Http\Requests\Job\JobCreateRequest;
use App\Http\Resources\JobResource;
use App\Http\Resources\JobWithDocumentResource;
use App\Models\Job;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class JobController extends Controller
{

    public function listJobs(): Response
    {
        return Inertia::render('Jobs/Index', [
            'jobs' => JobResource::collection(Job::all()),
        ]);
    }

    public function create(JobCreateRequest $request): RedirectResponse
    {
        $job = new Job;
        if($request->validated()){
            $job->name = $request->name;
            $job->city = $request->city;
            $job->state = $request->state;
            $job->save();

        }

        return redirect('/jobs');

    }
    public function destroy(string $id): RedirectResponse
    {
        Job::destroy($id);

        return redirect('/jobs');
    }

    public function view(string $id): Response
    {
        return Inertia::render('Jobs/View', [
            'job' => JobWithDocumentResource::collection(Job::where('id', '=', $id)->get())
        ]);

    }
}
