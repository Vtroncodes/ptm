<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'status' => fake()->randomElement(['pending', 'in progress', 'completed']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'description' => fake()->optional()->paragraph(),
            'parent_task' => null,
            'project_id' => \App\Models\Project::factory(),
            'assignee' => \App\Models\User::factory(),
            'accountable' => \App\Models\User::factory(),
            'email_url' => fake()->optional()->url(),
            'start_date' => fake()->optional()->date(),
            'due_date' => fake()->optional()->date(),
            'estimated_hours' => fake()->optional()->numberBetween(1, 100),
        ];
    }
}
