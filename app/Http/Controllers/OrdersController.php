<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;
use App\Services\OrdersService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = Auth::user();
        $orders = Orders::where('student_id', $user->student_id)->get();
        return view('orders.index', ['orders' => $orders]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $openOrder = Orders::where('state', 'OPEN')
            ->where('student_id', $user->student_id)
            ->first();
        if ($openOrder) {
            app(OrdersService::class)->update($openOrder, $request);
        } else {
            app(OrdersService::class)->create($request);
        }
        return redirect()->route('dashboard');
    }

    public function delete_class(Request $request)
    {
        $user = Auth::user();
        $order = Orders::where('id', $request->order_id)
            ->where('student_id', $user->student_id)
            ->first();
        if ($order) {
            app(OrdersService::class)->delete($order, $request);
        }
        return redirect()->route('dashboard');
    }
}
