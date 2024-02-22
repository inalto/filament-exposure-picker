<?php

namespace Inalto\FilamentExposurePicker\Forms\Components;

use Filament\Forms\Components\Concerns\HasAffixes;
use Filament\Forms\Components\Concerns\HasExtraInputAttributes;
use Filament\Forms\Components\Concerns\HasPlaceholder;
use Filament\Forms\Components\Field;
use Inalto\FilamentExposurePicker\Enums\ExposurePickerTheme;

class ExposurePicker extends Field
{
    use HasAffixes,
        HasExtraInputAttributes,
        HasPlaceholder;

    const PACKAGE_NAME = 'inalto/filament-exposure-picker';

    protected string $view = 'filament-exposure-picker::forms.components.exposure-picker';

    protected array $config = [];

    protected ExposurePickerTheme $theme = ExposurePickerTheme::DEFAULT;

    public function getConfig(): array
    {
        $config = [];

        return $config;
    }

    public function getTheme(): string
    {
        return $this->theme?->value;
    }

    public function getThemeAsset(): string
    {
        if ($this->getTheme() === ExposurePickerTheme::DEFAULT->value) {
            //        $this->theme(ExposurePickerTheme::LIGHT);
        }

        return asset('css/'.static::PACKAGE_NAME.'/exposurepicker-'.$this->getTheme().'-theme.css');
    }

    public function getDarkThemeAsset(): string
    {
        return asset('css/'.static::PACKAGE_NAME.'/exposurepicker-dark-theme.css');
    }

    public function getLightThemeAsset(): string
    {
        return asset('css/'.static::PACKAGE_NAME.'/exposurepicker-light-theme.css');
    }
}
