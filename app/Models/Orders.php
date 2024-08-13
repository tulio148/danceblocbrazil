<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
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


    protected $table = 'orders';

    protected $fillable = [
        'id',
        'student_id',
        'items_ids',
        'items_uid',
        'order_total',
        'payment_id'
    ];


    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }

    public function payment()
    {
        return $this->hasOne(Payments::class, 'order_id', 'id');
    }
}
