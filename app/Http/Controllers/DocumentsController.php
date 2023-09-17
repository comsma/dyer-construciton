<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocumentCreateRequest;
use App\Models\Document;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class DocumentsController extends Controller
{
    public function listDocuments(): void
    {
        $documents = Document::all();

        foreach ($documents as $document) {
            echo $document->id . ' ' . $document->name . '<br>';
        }
    }

    /**
     * Stream the document to an authenticated user
     *
     * @throws Exception
     */
    public function view(string $job_id, string $document_id): BinaryFileResponse
    {

        $document = Document::where(['job_id' => $job_id, 'id' =>  $document_id])->limit(1)->get();

        $name = $document[0]->name;

        if (!Storage::exists($name)) {
            throw new Exception('Document not found');
        }


        $path = Storage::path($name);
        $mime = Storage::mimeType($name);
        return response()->file($path, [
            'Content-Type'        => $mime,
            'Content-Disposition' => 'inline; filename="'.$document[0]->title.'"',
        ]);
    }


    public function create(DocumentCreateRequest $request, string $jobId): RedirectResponse
    {
        error_log($jobId);
        if (!Storage::directoryExists('job_documents/'.$jobId)) {
            Storage::createDirectory('job_documents/'.$jobId);
        }

        $path = Storage::putFile('job_documents/'.$jobId, $request->file('document'));

        Document::create([
            'name' => $path,
            'title' => $request->title,
            'job_id' => $jobId]);

        return to_route('jobs.get', ['jobId'=>$jobId]);

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

        return to_route('jobs.get', ['jobId'=>$jobId]);
    }
}
