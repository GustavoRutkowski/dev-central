<?php

// var_dump(dirname(__DIR__, 2));
require_once 'connection.php';

//var_dump($connection);
// var_dump(__DIR__);


function login() {
    global $connection;
    //var_dump($connection);

    header('Access-Control-Allow-Origin: *'); // Define que a API pode ser utilizada em outras origens
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $body = file_get_contents('php://input');
    $dataRaw = json_decode($body);
    $data = json_decode(json_encode($dataRaw), true);
    // var_dump($data);

    //var_dump($data);

    if (!isset($data['email']) || !isset($data['pass'])) {
        echo json_encode([
            "type" => "Error",
            "message" => "Faltam dados obrigatorios (email ou senha)"
        ]);
        exit;
    }
    
    $query = "SELECT * FROM users WHERE users.email LIKE \"{$data['email']}\"  AND users.pass LIKE \"{$data['pass']}\" ";
    $stmt = $connection -> prepare($query);

    $stmt -> execute();
    
    if ($stmt -> rowCount() != 1) {
        $response = [
            "type" => "ERROR",
            "message" => "Não foi encontrado um user com este email ou senha"
        ];
        echo json_encode($response);
        exit;
    }
    
    if ($stmt -> rowCount() == 1) {
        $response = [
            "type" => "SUCCESS",
            "message" => "Usuário Encontrado"
        ];
        echo json_encode($response);

        exit;
    }
};