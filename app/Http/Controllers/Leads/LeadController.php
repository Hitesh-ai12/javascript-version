<?php

namespace App\Http\Controllers\Leads;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    public function index()
    {
        return Lead::all();
    }

    public function store(Request $request)
    {
       
    // Validate the incoming request
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|regex:/^\d{10}$/',
            'tag' => 'required|string', // Ensure this field is expected to be a string
            'stage' => 'required|string', // Ensure this field is expected to be a string
        ]);

        // Create a new Lead
        $lead = Lead::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'tag' => $request->tag,
            'stage' => $request->stage,
            'source' => 'direct',
        ]);

        // Return the created Lead as a JSON response
        return response()->json($lead, 201);
    }
}
