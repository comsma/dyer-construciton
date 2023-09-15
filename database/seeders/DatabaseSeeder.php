<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'company'  => 'Test Company',
            'username' => 'test',
            'password' => 'test',
        ]);

        $this->call(JobSeeder::class);
        $this->call(DocumentsSeeder::class);
    }
}
