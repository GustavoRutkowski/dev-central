<?php

require_once 'connection.php';

function user_info() {
    global $connection;
    header('Access-Control-Allow-Origin: *'); // Define que a API pode ser utilizada em outras origens
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $body = file_get_contents('php://input');
    $dataRaw = json_decode($body);
    $data = json_decode(json_encode($dataRaw), true);


    //RETORNAR AS INFORMAÇÕES DO USUARIO
    $query = "SELECT * FROM users WHERE user_id = {$data['user_id']} ";
    $stmt = $connection -> prepare($query);

    $stmt -> execute();
    
    if ($stmt -> rowCount() > 0) {
        $response = [
            "type" => "Success",
            "message" => "essa é sua INFO",
            "data" => $stmt -> fetch()
        ];
        echo json_encode($response);
        exit;
    } else {
        $response = [
            "type" => "Error",
            "message" => "não foi possivel localizar suas informacoes"
        ];
        echo json_encode($response);
        exit;
    };


    //RETORNAR A LISTA DE CONTATOS

    $query2 = 'SELECT u.user_id, u.name, u.email
               FROM users u
               JOIN contacts c ON u.user_id = c.contact_user_id
               WHERE c.user_id = {$data['user_id']};';

    $stmt2 = $connection -> prepare($query2);
    $stmt2 -> execute();

    if ($stmt2 -> rowCount() > 0) {
        $response = [
            "type" => "Success",
            "message" => "sua lista de contatos:",
            "data" => $stmt2 -> fetchAll()
        ];
        echo json_encode($response);
        exit;
    } else {
        echo json_encode([
            "type" => "Error",
            "message" => "não foram encontrados contatos em sua lista"
        ]);
        exit;
    }

}




    // if (!isset($data['email']) || !isset($data['pass'])) {
    //     echo json_encode([
    //         "type" => "Error",
    //         "message" => "Faltam dados obrigatorios (email ou senha)"
    //     ]);
    //     exit;
    // }
    
  


    
