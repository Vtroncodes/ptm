<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'V',
            'email' => 'v@example.com',
            'password' => bcrypt('Vlog@123'),
            'email_verified_at' => now()
        ]);

        Project::factory()->count(10)->hasTasks(10)->create();
    }
}
