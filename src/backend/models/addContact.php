<?php
require_once 'connection.php';

function addContact($currentUserEmail, $contactEmail) {
    global $connection;

    // Obter user_id do usuário atual (logado)
    $query1 = "SELECT user_id FROM users WHERE email = ?";
    $stmt1 = $connection->prepare($query1);
    $stmt1->execute([$currentUserEmail]);
    $currentUser = $stmt1->fetch(PDO::FETCH_ASSOC);

    // Obter user_id do contato a ser adicionado
    $query2 = "SELECT user_id FROM users WHERE email = ?";
    $stmt2 = $connection->prepare($query2);
    $stmt2->execute([$contactEmail]);
    $contactUser = $stmt2->fetch(PDO::FETCH_ASSOC);

    // Verificar se ambos os usuários existem
    if (!$currentUser || !$contactUser) {
        echo json_encode([
            "type" => "Error",
            "message" => "Usuário não encontrado."
        ]);
        exit;
    }

    // Inserir novo contato na tabela contacts
    $query3 = "INSERT INTO contacts (user_id, contact_user_id) VALUES (?, ?)";
    $stmt3 = $connection->prepare($query3);
    $stmt3->execute([$currentUser['user_id'], $contactUser['user_id']]);

    if ($stmt3->rowCount() == 1) {
        echo json_encode([
            "type" => "SUCCESS",
            "message" => "Contato adicionado com sucesso!"
        ]);
    } else {
        echo json_encode([
            "type" => "ERROR",
            "message" => "Falha ao adicionar contato."
        ]);
    }
}
?>
