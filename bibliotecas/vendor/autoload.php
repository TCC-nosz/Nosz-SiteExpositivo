<?php

// autoload.php @gerado pelo Composer

if (PHP_VERSION_ID < 50600) {

    if (!headers_sent()) { header('HTTP/1.1 500 Erro Interno do Servidor'); 
    }
    $err = 'CO suporte de auto carregamento do Composer 2.3.0 no PHP <5.6, e você está na versão do PHP '.PHP_VERSION.', atualize seu PHP ou utilize o Composer 2.2 LTS via "composer self-update --2.2". abortar.'.PHP_EOL;

    if (!ini_get('display_errors')) {

        if (PHP_SAPI === 'cli' || PHP_SAPI === 'phpdbg') { fwrite(STDERR, $err); } 
        else if (!headers_sent()) { echo $err;  }
    }
    
    trigger_error( $err, E_USER_ERROR );
}

require_once __DIR__ . '/composer/autoload_real.php';

return ComposerAutoloaderInitd9fba95da3c1bc8334f308d925cc7c56::getLoader();