<?php

require_once 'helpers/Request.php';
require_once 'helpers/Response.php';
require_once 'connection.php';

class Users {
    public static function createUser() {
        global $connection;

        $body = Request::getBody();

        if (!isset($body['email'])) {
            Response::status(400);
            Response::json([ "message" => "A propridade email é obrigatória " ]);
            exit;
        }

        if (!isset($body['pass'])) {
            Response::status(400);
            Response::json([ "message" => "A propridade pass é obrigatória " ]);
            exit;
        }

        if (!isset($body['username'])) {
            Response::status(400);
            Response::json([ "message" => "A propridade username é obrigatória " ]);
            exit;
        }

        $passHash = password_hash($body['pass'], PASSWORD_DEFAULT);

        $query = "INSERT INTO users (name, email, pass) VALUES (:name, :email, :pass)";
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':name', $body['username']);
        $stmt->bindParam(':email', $body['email']);
        $stmt->bindParam(':pass', $passHash);
        $stmt->execute();

        if ($stmt->rowCount() !== 1) {
            Response::status(400);
            Response::json([ "message" => "Usuário não registrado" ]);
            exit;
        }
        
        Response::status(200);
        Response::json([ "message" => "Usuário registrado com sucesso" ]);
        exit;
    }

    public static function login() {
        global $connection;

        $body = Request::getBody();

        if (!isset($body['email'])) {
            Response::status(400);
            Response::json([ "message" => "A propriedade email é obrigatória" ]);
            exit;
        }

        if(!filter_var($body["email"], FILTER_VALIDATE_EMAIL)){
            Response::status(400);
            Response::json([ "message" => "Email inválido" ]);
            exit;
        }

        if (!isset($body['pass'])) {
            Response::status(400);
            Response::json([ "message" => "A propriedade pass é obrigatória" ]);
            exit;
        }

        $query = "SELECT * FROM users WHERE email = :email";
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':email', $body['email']);

        $stmt->execute();

        if ($stmt->rowCount() <= 0) {
            Response::status(400);
            Response::json([ "message" => "Usuário não encontrado" ]);
            exit;
        }

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!password_verify($body['pass'], $user['pass'])) {
            Response::status(400);
            Response::json([ "message" => "Senha incorreta" ]);
            exit;
        }

        // cria a sessão
        $_SESSION["userAuth"] = [
            "id" => $user->id,
            "name" => $user->name
        ];

        // cria o cookie
        setcookie("userAuth", 1, time() + 60 * 60, "/");

        unset($user->pass);

        // Res
        Response::status(200);
        Response::json($user);
        exit;
    }

    private static function getContacts() {
        global $connection;

        $user_id = intval(Request::getParam('user_id'));


        if (!isset($user_id) || $user_id === 0) {
            Response::status(400);
            Response::json([ "message" => "O parâmetro user_id é obrigatório" ]);
            exit;
        }

        $query = "
            SELECT u.name, u.description, u.profile_picture
                FROM users AS u
            JOIN contacts AS c
                ON u.user_id = c.contact_user_id
            WHERE c.user_id = :user_id
        ";
                    
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() <= 0) {
            Response::status(400);
            Response::json([ "message" => "Contatos não encontrados" ]);
            exit;
        }
        
        $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }

    public static function getUserInfo() {
        global $connection;

        $user_id = intval(Request::getParam('user_id'));

        if (!isset($user_id) || $user_id === 0) {
            Response::status(400);
            Response::json([ "message" => "O parâmetro user_id é obrigatório" ]);
            exit;
        }

        $query = "
            SELECT name, description, email, profile_picture
                FROM users
            WHERE user_id = ?
        ";

        $stmt = $connection->prepare($query);
        $stmt->execute([$user_id]);
        
        if ($stmt->rowCount() <= 0) {
            Response::status(400);
            Response::json([ "message" => "Informações não encontradas" ]);
            exit;
        }

        $user_infos = $stmt->fetch(PDO::FETCH_ASSOC);
        $contacts = self::getContacts();

        $user_infos['contacts'] = $contacts;

        Response::status(200);
        Response::json($user_infos);
    }

    public static function addContact() {
        global $connection;

        $myId = intval(Request::getParam('user_id'));
        $contactUsername = Request::getBody()['username'];

        $query = "SELECT user_id FROM users WHERE name = ?";
        $stmt = $connection->prepare($query);
        $stmt->execute([$contactUsername]);
        $contactId = $stmt->fetch(PDO::FETCH_ASSOC)['user_id'];

        if (!$myId) {
            Response::status(400);
            Response::json([ "message" => "user_id é um parâmetro obrigatório" ]);
            exit;
        }

        if (!$contactUsername) {
            Response::status(400);
            Response::json([ "message" => "username precisa ser definido no body" ]);
            exit;
        }

        $query = "INSERT INTO contacts (user_id, contact_user_id) VALUES (?, ?)";
        $stmt = $connection->prepare($query);
        $stmt->execute([$myId, $contactId]);

        if ($stmt->rowCount() !== 1) {
            Response::status(400);
            Response::json([ "message" => "Falha ao adicionar contato" ]);
            exit;
        }

        Response::status(200);
        Response::json([ "message" => "Contato adicionado com sucesso!" ]);
        exit;
    }
}