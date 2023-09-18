<?php

namespace App\Http\Controllers;

use App\Http\Requests\Job\CreateUserOnJobRequest;
use App\Http\Requests\Job\JobCreateRequest;
use App\Http\Requests\Job\UpdateJobRequest;
use App\Http\Resources\Job\JobListResource;
use App\Http\Resources\Job\JobResource;
use App\Http\Resources\JobWithDocumentResource;
use App\Models\Job;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JobController extends Controller
{

    public function listJobs(Request $request): Response
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }

        return Inertia::render('Jobs/Index', [
            'jobs' => JobListResource::collection(Job::all()),
        ]);
    }

    public function create(JobCreateRequest $request): RedirectResponse
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }

        $job = new Job;
        if($request->validated()){
            $job->name = $request->name;
            $job->city = $request->city;
            $job->state = $request->state;
            $job->save();

        }

        return redirect('/jobs');

    }
    public function destroy(Request $request, string $id): RedirectResponse
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }
        Job::destroy($id);

        return redirect('/jobs');
    }

    public function getJob(Request $request, Job $job): Response
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }



        return Inertia::render('Jobs/View', [
            'job' => JobResource::collection([$job]),
            'available_users' => Inertia::lazy(fn () => User::select(['id', 'username'])->get())
        ]);

    }

    public function updateJob(UpdateJobRequest $request, string $jobId): RedirectResponse
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }

        $job = Job::findOrFail($jobId);

        if($request->validated()){
            $job->name = $request->name;
            $job->city = $request->city;
            $job->state = $request->state;
            $job->save();
        }

        return to_route('jobs.get', ['jobId'=>$jobId]);
    }

    public function createUserOnJob(CreateUserOnJobRequest $request, Job $job):RedirectResponse
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }
        $user = User::create($request->validated());

        $job->users()->attach($user);

        return to_route('jobs.get', ['job'=> $job->id]);
    }
    public function addUserOnJob(Request $request, Job $job, User $user): RedirectResponse
    {

        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }

        $job->users()->attach($user);

        return to_route('jobs.get', ['job'=>$job->id]);

    }

    public function detachUserOnJob(Request $request, Job $job, User $user): RedirectResponse
    {
        if($request->user()->cannot('modify-documents')) {
            abort(403);
        }

        $job->users()->detach($user);

        return to_route('jobs.get', ['job'=>$job]);
    }
}
