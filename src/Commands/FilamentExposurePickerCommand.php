<?php

namespace Inalto\FilamentExposurePicker\Commands;

use Illuminate\Console\Command;

class FilamentExposurePickerCommand extends Command
{
    public $signature = 'filament-exposure-picker';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
