<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Classes;
use App\Mail\ClassReminder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendClassReminders extends Command
{
    protected $signature = 'reminders:send';
    protected $description = 'Send class reminders for classes happening tomorrow';

    public function handle()
    {
        $tomorrow = Carbon::tomorrow();
        $classes = Classes::whereDate('datetime', $tomorrow->toDateString())->get();

        foreach ($classes as $class) {
            foreach ($class->students as $student) {
                if ($student->is_subscribed) {
                    $data = (object) [
                        'student' => $student,
                        'class' => $class
                    ];

                    Mail::to($student->email)->send(new ClassReminder($data));
                }
            }
        }

        $this->info('Reminders sent successfully!');
    }
}
