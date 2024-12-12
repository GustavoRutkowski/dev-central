<?php
require_once 'connection.php';

function sendMessage($author_id, $chat_id, $message_body) {
    global $connection;
    
    $query = "INSERT INTO messages (body, time_stamp, author_id, chat_id) VALUES (?, NOW(), ?, ?)";
    $stmt = $connection->prepare($query);
    $stmt->execute([$message_body, $author_id, $chat_id]);
    
    if ($stmt->rowCount() == 1) {
        echo json_encode([
            "type" => "SUCCESS",
            "message" => "Mensagem enviada com sucesso!"
        ]);
    } else {
        echo json_encode([
            "type" => "ERROR",
            "message" => "Falha ao enviar mensagem."
        ]);
    }
}

//sendMessage(1, 1, 'Olá, como você está?'); // Exemplo de uso
?>
