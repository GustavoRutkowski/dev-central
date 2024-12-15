<?php

require_once 'connection.php';
require_once 'helpers/Request.php';
require_once 'helpers/Response.php';

class Chats {
    public static function createPVChat() {
        global $connection;

        $body = Request::getBody();
        $id_user1 = intval($body['user_id_1']);
        $id_user2 = intval($body['user_id_2']);

        $query = 'INSERT INTO chat_pv (user_id, user_contact) VALUES (?,?)';
        $stmt = $connection->prepare($query);
        $stmt->execute([$id_user1, $id_user2]);

        if ($stmt->rowCount() !== 1) {
            Response::status(400);
            Response::json([ "message" => "Falha ao criar o chat!" ]);
            exit;
        }

        Response::status(200);
        Response::json([ "message" => "Chat criado com Sucesso!" ]);
        exit;
    }

    public static function sendMessage() {
        global $connection;

        $body = Request::getBody();

        if (!$body['message']) {
            Response::status(400);
            Response::json([ "message" => "O atributo message é obrigatório" ]);
            exit;
        }
        
        if (!$body['author_id']) {
            Response::status(400);
            Response::json([ "message" => "O atributo author_id é obrigatório" ]);
            exit;
        }

        if (!$body['chat_id']) {
            Response::status(400);
            Response::json([ "message" => "O atributo chat_id é obrigatório" ]);
            exit;
        }

        $query = "
            INSERT INTO messages (body, time_stamp, author_id, chat_id)
            VALUES (?, NOW(), ?, ?)
        ";
        $stmt = $connection->prepare($query);
        $stmt->execute([$body['message'], $body['author_id'], $body['chat_id']]);

        Response::status(200);
        Response::json([ "message" => "Mensagem enviada com suçeço 🥵" ]);
        exit;
    }

    public static function getMessagesByChatID() {
        global $connection;
    
        $chat_id = intval(Request::getParam('chat_id'));
    
        $query = "
            SELECT m.message_id, m.body, m.time_stamp, u.name AS author_name
                FROM messages m 
            JOIN users u ON m.author_id = u.user_id
                WHERE m.chat_id = ? 
            ORDER BY m.time_stamp ASC
        ";
                  
        $stmt = $connection->prepare($query);
        $stmt->execute([$chat_id]);
        
        $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        Response::json($messages);
    }

    public static function getChatById() {

    }
}    
