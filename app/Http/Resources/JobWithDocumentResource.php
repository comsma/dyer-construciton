<?php

namespace App\Http\Resources;

use App\Http\Resources\Admin\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobWithDocumentResource extends JsonResource
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
            'name' => $this->name,
            'city' => $this->city,
            'state' => $this->state,
            'documents' => DocumentResource::collection($this->documents),
            'users' => UserResource::collection($this->users),
        ];
    }
}
