<?php

namespace Inalto\FilamentExposurePicker;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
//use Inalto\FilamentExposurePicker\Commands\FilamentExposurePickerCommand;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentExposurePickerServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('filament-exposure-picker')
            ->hasConfigFile()
            ->hasViews();
        //            ->hasMigration('create_filament-exposure-picker_table')
        //            ->hasCommand(FilamentExposurePickerCommand::class)
    }

    public function packageBooted()
    {
        FilamentAsset::register([
            //Js::make('flatpickr-range-plugin', __DIR__.'/../resources/assets/flatpickr/dist/plugins/rangePlugin.js'),
            Css::make('exposure', __DIR__.'/../dist/exposure-picker.css')->loadedOnRequest(),
            AlpineComponent::make('exposure-picker', __DIR__.'/../dist/exposure-picker.js')->loadedOnRequest(),
        ], package: FilamentExposurePicker::getPackageName());
    }
}
