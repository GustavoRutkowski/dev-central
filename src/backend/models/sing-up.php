<?php
require_once 'connection.php';

function register() {
    global $connection;

    header('Access-Control-Allow-Origin: *'); // Define que a API pode ser utilizada em outras origens
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $body = file_get_contents('php://input');
    $dataRaw = json_decode($body);
    $data = json_decode(json_encode($dataRaw), true);
    //var_dump($data);

    if (!isset($data['email']) || !isset($data['pass']) || !isset($data['username'])) {
        echo json_encode([
            "type" => "Error",
            "message" => "Faltam dados obrigatorios (nome, email ou senha)"
        ]);
        exit;
    }

    $query = "INSERT INTO users (name, email, pass) VALUES (\"{$data['username']}\", \"{$data['email']}\", \"{$data['pass']}\")";
    $stmt = $connection->prepare($query);

    $stmt->execute();
    
    if ($stmt->rowCount() != 1) {
        $response = [
            "type" => "ERROR",
            "message" => "usuario nao registrado"
        ];
        echo json_encode($response);
        exit;
    }
    
    if ($stmt->rowCount() == 1) {
        $response = [
            "type" => "SUCCESS",
            "message" => "usuario registrado com sucesso!"
        ];
        echo json_encode($response);
        exit;
    }
};
