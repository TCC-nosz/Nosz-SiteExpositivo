<?php

// autoload_static.php @gerado pelo Composer

namespace Composer\Autoload;

class ComposerStaticInitd9fba95da3c1bc8334f308d925cc7c56
{
    public static $files = array (
        '3f8bdd3b35094c73a26f0106e3c0f8b2' => __DIR__ . '/..' . '/sendgrid/sendgrid/lib/SendGrid.php',
        '9dda55337a76a24e949fbcc5d905a2c7' => __DIR__ . '/..' . '/sendgrid/sendgrid/lib/helpers/mail/Mail.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array ( 'SendGrid\\' => 9, )
    );

    public static $prefixDirsPsr4 = array (
        'SendGrid\\' => array ( 0 => __DIR__ . '/..' . '/sendgrid/php-http-client/lib' )
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        
        return \Closure::bind(function () use ($loader) {

            $loader->prefixLengthsPsr4 = ComposerStaticInitd9fba95da3c1bc8334f308d925cc7c56::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd9fba95da3c1bc8334f308d925cc7c56::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd9fba95da3c1bc8334f308d925cc7c56::$classMap;

        }, null, ClassLoader::class);

    }
}
