<?php
require_once 'connection.php';

function getMessages($chat_id) {
    global $connection;
    
    $query = "SELECT m.message_id, m.body, m.time_stamp, u.name AS author_name 
              FROM messages m 
              JOIN users u ON m.author_id = u.user_id 
              WHERE m.chat_id = ? 
              ORDER BY m.time_stamp ASC";
              
    $stmt = $connection->prepare($query);
    $stmt->execute([$chat_id]);
    
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($messages);
}

//getMessages(1); // Exemplo de uso
?>
