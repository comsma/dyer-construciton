<?php

namespace App\Policies;

use App\Models\Document;
use App\Models\User;

class DocumentPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function view(User $user, Document $document): bool{
        if ($user->has_modify_documents){
            return true;
        }
        else if ($user->has_view_documents){
            $job = $document->job;
            error_log($job);
            return $job->users()->where('user_id', $user->getKey())->exists();
        }

        return false;

    }

    public function create(User $user):bool
    {
        return $user->has_modify_documents;
    }
}
