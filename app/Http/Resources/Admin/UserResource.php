<?php

namespace App\Http\Resources\Admin;

use App\Http\Resources\Job\JobResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'company' => $this->company,
            'hasViewDocuments' => $this->has_view_documents,
            'hasModifyDocuments' => $this->has_modify_documents,
            'hasModifyGallery' => $this->has_modify_gallery,
            'hasAdmin' => $this->has_admin,
            'jobs' => JobResource::collection($this->jobs)
        ];
    }
}
