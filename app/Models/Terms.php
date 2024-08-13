<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Terms extends Model
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

    public function getRouteKeyName(): string
    {
        return 'name';
    }

    protected $fillable = [
        'id', 'name', 'start_date', 'end_date', 'level', 'style', 'location', 'price'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date'
    ];

    public function classes(): HasMany
    {
        return $this->hasMany(Classes::class, 'term_id');
    }
}
