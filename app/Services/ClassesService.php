<?php

namespace App\Services;

// use RRule\RRule;
use App\Models\Classes;
use Illuminate\Http\Request;
use Square\Models\Money;
use Square\SquareClient;
use Square\Models\CatalogItem;
use Square\Models\CatalogObject;
// use Square\Models\CatalogTimePeriod;
use Square\Models\CatalogItemVariation;
use Square\Models\CatalogItemOptionForItem;
use Square\Models\CatalogItemOptionValueForItemVariation;
use Square\Models\UpsertCatalogObjectRequest;


class ClassesService
{

    public function store(Request $request)
    {
        $id = $request->id;
        $name = $request->name;
        $description = $request->description;
        $style = $request->style;
        $level = $request->level;
        $instructor = $request->instructor;
        // $enrollment_mode = $request->enrollment_mode;
        $location = $request->location;
        $price = $request->price;
        $datetime = $request->datetime;
        // $square_datetime = new RRule([
        //     'FREQ' => 'YEARLY',
        //     'DTSTART' => $datetime,
        //     'COUNT' => 1
        // ]);




        // $level_id = "OC2KDCWQDHSRINFMR7BOV4GG";
        // if ($level == "open") {
        //     $level_value_id = "PDCO2FBCTNLOVLTG5IEZ2FKU";
        // } elseif ($level == "beginner") {
        //     $level_value_id = "7VSWSOWDEEUYICBQLHQDUIFW";
        // } elseif ($level == "intermediate") {
        //     $level_value_id = "V5W7BTDS4SM6TD2U2N72JAXU";
        // } elseif ($level == "advanced") {
        //     $level_value_id = "WFH4FS4QHIYJF4SZSOHZVP6E";
        // }


        // $enrollment_mode_id = "AOCHMQYDJTS57ZVIU7XZ4ITC";

        // if ($enrollment_mode == "single") {
        //     $enrollment_mode_value_id = "7B6AMXMCQZANHHOMWUZ7DT3X";
        // } else {
        //     $enrollment_mode_value_id = "QTTBGTGLINEZKN73LUMD7EX7";
        // }


        // $client = app(SquareClient::class);
        // $idempotency_key = uniqid();

        // $price_money = new Money();
        // $price_money->setAmount($price * 100);
        // $price_money->setCurrency('AUD');

        // $choose_level = new \Square\Models\CatalogItemOptionValueForItemVariation();
        // $choose_level->setItemOptionId($level_id);
        // $choose_level->setItemOptionValueId($level_value_id);

        // $choose_enrollment_mode = new CatalogItemOptionValueForItemVariation();
        // $choose_enrollment_mode->setItemOptionId($enrollment_mode_id);
        // $choose_enrollment_mode->setItemOptionValueId($enrollment_mode_value_id);

        // $options = [$choose_level];

        // $class_specs = new CatalogItemVariation();
        // $class_specs->setItemId(env('VITE_SQUARE_SAMBA_CLASS_ID'));
        // $class_specs->setName($name);
        // $class_specs->setPricingType('FIXED_PRICING');
        // $class_specs->setPriceMoney($price_money);
        // $class_specs->setItemOptionValues($options);

        // $square_datetime_converted = new CatalogTimePeriod();
        // $square_datetime_converted->setEvent($square_datetime->rfcString());

        // $new_class_variation = new CatalogObject('ITEM_VARIATION', '#' . $name);
        // $new_class_variation->setItemVariationData($class_specs);

        // $body = new UpsertCatalogObjectRequest($idempotency_key, $new_class_variation);

        // $api_response = $client->getCatalogApi()->upsertCatalogObject($body);

        // if ($api_response->isSuccess()) {
        //     $result = $api_response->getResult();

        //     $id = $result->getCatalogObject()->getId();
        //     $version = $result->getCatalogObject()->getVersion();
        //     $stupid_square_name = $result->getCatalogObject()->getItemVariationData()->getName();

        Classes::updateOrCreate(
            ['id' => $id],
            [
                'id' => $id,
                // 'version' => $version,
                // 'stupid_square_name' => $stupid_square_name,
                'name' => $name,
                'description' => $description,
                'style' => $style,
                'level' => $level,
                'instructor' => $instructor,
                // 'enrollment_mode' => $enrollment_mode,
                'location' => $location,
                'price' => $price,
                'datetime' => $datetime,
            ]
        );
        // } else {
        //     $errors = $api_response->getErrors();
        //     dd($errors);
        // }
    }


    public function update(Request $request)
    {
        // $client = app(SquareClient::class);
        // $idempotency_key = uniqid();             

        $id = $request->id;
        $term_id = $request->term_id;
        $name = $request->name;
        $description = $request->description;
        $style = $request->style;
        $level = $request->level;
        $instructor = $request->instructor;
        $location = $request->location;
        $price = $request->price;
        $datetime = $request->datetime;
        // $version = $request->version;

        $class = Classes::find($id);

        if ($class == null) {
            return;
        }
        $class->id = $id;
        $class->term_id = $term_id;
        $class->name = $name;
        $class->description = $description;
        $class->style = $style;
        $class->level = $level;
        $class->instructor = $instructor;
        // $class->enrollment_mode = $enrollment_mode;
        $class->location = $location;
        $class->price = $price;
        $class->datetime = $datetime;

        // $level_id = "BCBVPJAEHUHOOGNLTFIVRIND";

        // if ($level == "open") {
        //     $level_value_id = "PDCO2FBCTNLOVLTG5IEZ2FKU";
        // } elseif ($level == "beginner") {
        //     $level_value_id = "7VSWSOWDEEUYICBQLHQDUIFW";
        // } elseif ($level == "intermediate") {
        //     $level_value_id = "V5W7BTDS4SM6TD2U2N72JAXU";
        // } elseif ($level == "advanced") {
        //     $level_value_id = "WFH4FS4QHIYJF4SZSOHZVP6E";
        // }

        // $enrollment_mode_id = "AOCHMQYDJTS57ZVIU7XZ4ITC";

        // if ($enrollment_mode == "single") {
        //     $enrollment_mode_value_id = "7B6AMXMCQZANHHOMWUZ7DT3X";
        // } else {
        //     $enrollment_mode_value_id = "QTTBGTGLINEZKN73LUMD7EX7";
        // }


        // $price_money = new \Square\Models\Money();
        // $price_money->setAmount($price * 100);
        // $price_money->setCurrency('AUD');

        // $choose_level = new \Square\Models\CatalogItemOptionValueForItemVariation();
        // $choose_level->setItemOptionId($level_id);
        // $choose_level->setItemOptionValueId($level_value_id);

        // $choose_enrollment_mode = new CatalogItemOptionValueForItemVariation();
        // $choose_enrollment_mode->setItemOptionId($enrollment_mode_id);
        // $choose_enrollment_mode->setItemOptionValueId($enrollment_mode_value_id);

        // $options = [$choose_level, $choose_enrollment_mode];

        // $item_variation_data = new \Square\Models\CatalogItemVariation();
        // $item_variation_data->setItemId(env('VITE_SQUARE_SAMBA_CLASS_ID'));
        // $item_variation_data->setName($stupid_square_name);
        // $item_variation_data->setPricingType('FIXED_PRICING');
        // $item_variation_data->setPriceMoney($price_money);
        // $item_variation_data->setItemOptionValues($options);

        // $object = new \Square\Models\CatalogObject('ITEM_VARIATION', $id);
        // $object->setVersion($version);
        // $object->setItemVariationData($item_variation_data);

        // $body = new \Square\Models\UpsertCatalogObjectRequest($idempotency_key, $object);

        // $api_response = $client->getCatalogApi()->upsertCatalogObject($body);

        // if ($api_response->isSuccess()) {
        //     $result = $api_response->getResult();
        //     $new_version = $result->getCatalogObject()->getVersion();
        //     $new_stupid_square_name = $result->getCatalogObject()->getItemVariationData()->getName();
        //     $class->version = $new_version;
        //     $class->stupid_square_name = $new_stupid_square_name;
        $class->save();
        // } else {
        //     $errors = $api_response->getErrors();
        //     dd($errors);
        // }
    }


    public function destroy(Classes $class)
    {
        // $client = app(SquareClient::class);
        // $api_response = $client->getCatalogApi()->deleteCatalogObject($class->id);

        // if ($api_response->isSuccess()) {
        //     $result = $api_response->getResult();
        $class->delete();
        // } else {
        //     $errors = $api_response->getErrors();
        //     dd($errors);
        // }
    }
}
