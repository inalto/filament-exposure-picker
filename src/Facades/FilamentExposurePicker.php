<?php

namespace Inalto\FilamentExposurePicker\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Inalto\FilamentExposurePicker\FilamentExposurePicker
 */
class FilamentExposurePicker extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Inalto\FilamentExposurePicker\FilamentExposurePicker::class;
    }
}
