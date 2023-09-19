<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Document;
use App\Models\User;
use App\Policies\DocumentPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Document::class => DocumentPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        Gate::before(function (User $user) {
            if ($user->has_admin) {
                return true;
            }

            return null;
        });

        Gate::define('view-documents', function (User $user): bool {
            return $user->has_view_documents;
        });

        Gate::define('modify-documents', function (User $user): bool {
            return $user->has_modify_documents;
        });

        Gate::define('admin', function (User $user): bool {
            return $user->has_admin;
        });

    }
}
