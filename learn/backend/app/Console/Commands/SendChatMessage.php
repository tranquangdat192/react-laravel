<?php

namespace App\Console\Commands;

use App\Events\ChatMessage;
use App\Model\Message;
use Illuminate\Console\Command;

class SendChatMessage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'chat:message';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test chat';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $message = Message::create([
            'message' => str_random(32)
        ]);

        event(new ChatMessage($message));
    }
}
