<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocumentCreateRequest;
use App\Models\Document;
use App\Models\Job;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class DocumentsController extends Controller
{
    /**
     * Stream the document to an authenticated user
     *
     * @throws Exception
     */
    public function view(Request $request, string $job, Document $document): BinaryFileResponse
    {
        if ($request->user()->cannot('view', $document)) {
            abort(403);
        }

        $name = $document->name;

        if (!Storage::exists($name)) {
            throw new Exception('Document not found');
        }


        $path = Storage::path($name);
        $mime = Storage::mimeType($name);
        return response()->file($path, [
            'Content-Type'        => $mime,
            'Content-Disposition' => 'inline; filename="'.$document->title.'"',
        ]);
    }


    public function create(DocumentCreateRequest $request, Job $job): RedirectResponse
    {
        error_log($job);


        if (!Storage::directoryExists('job_documents/'.$job->id)) {
            Storage::createDirectory('job_documents/'.$job->id);
        }

        $path = Storage::putFile('job_documents/'.$job->id, $request->file('document'));

        Document::create([
            'name' => $path,
            'title' => $request->title,
            'job_id' => $job->id]);

        return to_route('jobs.get', ['job'=>$job->id]);

    }

    /**
     * Remove the document form the job
     * @throws Exception
     */
    public function destroy(string $jobId, string $documentId): RedirectResponse
    {
        $document = Document::where(['job_id' => $jobId, 'id' =>  $documentId])->limit(1)->get();

        $name = $document[0]->name;

        if (!Storage::exists($name)) {
            throw new Exception('Document not found');
        }
        Storage::delete($name);

        Document::destroy($document[0]->id);

        return to_route('jobs.get', ['job'=>$jobId]);
    }
}
