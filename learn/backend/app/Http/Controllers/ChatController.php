<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Events\ChatMessage;
use App\Model\Message;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->all();
        $message = Message::create([
            'message' => $data['value']
        ]);

        event(new ChatMessage($message));
    }
}
