<?php

// $rootDir = dirname(__DIR__, 2);
// Inclua o arquivo de configuração usando o caminho absoluto 

require 'config.php';

// $pdo_config = "
//     mysql:host={$host};
//     dbname={$db_name}
// ";

$pdo_config = "mysql:host={$host};dbname={$db_name}";

try {
    $connection = new PDO($pdo_config, $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // echo "ERROR: " . $e->getMessage();
    throw new Exception("ERROR: " . $e->getMessage);
}
