<?php

namespace App\Models;

use App\Models\Student;
use App\Models\Orders;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payments extends Model
{
    use HasFactory;


    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The data type of ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'order_id',
        'student_id',
        'total_money',
    ];

    // Define the relationship with the Student model
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }

    // Define the relationship with the Order model
    public function order()
    {
        return $this->belongsTo(Orders::class, 'order_id', 'id');
    }
}
