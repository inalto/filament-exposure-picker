<?php

namespace Inalto\FilamentExposurePicker\Tests;

use Illuminate\Database\Eloquent\Factories\Factory;
use Inalto\FilamentExposurePicker\FilamentExposurePickerServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

class TestCase extends Orchestra
{
    protected function setUp(): void
    {
        parent::setUp();

        Factory::guessFactoryNamesUsing(
            fn (string $modelName) => 'Inalto\\FilamentExposurePicker\\Database\\Factories\\'.class_basename($modelName).'Factory'
        );
    }

    protected function getPackageProviders($app)
    {
        return [
            FilamentExposurePickerServiceProvider::class,
        ];
    }

    public function getEnvironmentSetUp($app)
    {
        config()->set('database.default', 'testing');

        /*
        $migration = include __DIR__.'/../database/migrations/create_filament-exposure-picker_table.php.stub';
        $migration->up();
        */
    }
}
