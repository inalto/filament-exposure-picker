# Filament Solar Exposure widget

[![Latest Version on Packagist](https://img.shields.io/packagist/v/inalto/filament-exposure-picker.svg?style=flat-square)](https://packagist.org/packages/inalto/filament-exposure-picker)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/inalto/filament-exposure-picker/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/inalto/filament-exposure-picker/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/inalto/filament-exposure-picker/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/inalto/filament-exposure-picker/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/inalto/filament-exposure-picker.svg?style=flat-square)](https://packagist.org/packages/inalto/filament-exposure-picker)

The FilamentPHP Exposure Picker is an intuitive and efficient tool designed to enhance user experience by allowing easy selection of the sun's exposure direction through a simple dropdown. Users can input cardinal and intercardinal directions such as N (North), NE (Northeast), E (East), SE (Southeast), S (South), SW (Southwest), W (West), and NW (Northwest) to accurately specify the direction of sunlight exposure. This feature is particularly useful for applications related to real estate, gardening, or any other domain where sunlight direction plays a critical role. The picker simplifies data entry, ensuring that users can quickly and effortlessly input precise information. 

## Installation

You can install the package via composer:

```bash
composer require inalto/filament-exposure-picker
```



Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-exposure-picker-views"
```

## Usage

```php
return $form
          ->schema([
            ...
            ExposurePicker::make('exposure')
                        ->label(__('inalto.report.fields.exposure'))
                        ->suffixIcon('heroicon-o-sun'),
            ...
            ]);
```

## Testing

```bash
composer test
```
## 🤑 Support Us 🤑

These codes make your life easier and you avoid wasting time?\
Give us some RedBull!

USDT(BEP20)\
0x367B9207ACBC30022F9A7262320E36661D7Ffeb5

## ✉️ Contact Us ✉️ 

Do you have any suggestions?\
Do you need to customise this plugin?

Mail: webmaster@inalto.com\
Telegram: @inaltoDev

## Credits

- [Alain Martini](https://github.com/inalto)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
