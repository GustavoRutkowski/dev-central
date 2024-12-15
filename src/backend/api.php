<?php
require_once 'models/connection.php';
require_once 'models/Users.php';
require_once 'models/Chats.php';
require_once 'helpers/Router.php';

// Headers:
header('Content-type: application/json'); // Define que a API vai usar JSON
header('Access-Control-Allow-Origin: localhost:5500'); // Define que a API pode ser utilizada em outras origens
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Rotas:
Router::post('/login', 'Users::login');
Router::post('/create-user', 'Users::createUser');
Router::get('/user-info', 'Users::getUserInfo');
Router::post('/send-message','Chats::sendMessage');
Router::post('/create-pvchat', 'Chats::createPVChat');
Router::get('/get-messages-by-chat-id', 'Chats::getMessagesByChatID');
Router::post('/add-contact', 'Users::addContact');



Router::handleRequests();
