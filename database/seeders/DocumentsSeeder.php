<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\Job;
use Illuminate\Database\Seeder;

class DocumentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Document::factory()
            ->count(10)
            ->create([
                'job_id' => Job::inRandomOrder()->first()->id,
            ]);
    }
}
