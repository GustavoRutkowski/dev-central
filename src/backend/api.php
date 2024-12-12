<?php

require 'models/connection.php';
require 'helpers/Router.php';
require 'models/login.php';
require 'models/sing-up.php';
require 'models/user-info.php';
require 'models/addContact.php';
require 'models/sendMessage.php';
require 'models/getMessage.php';

// Headers:
header('Content-type: application/json'); // Define que a API vai usar JSON
header('Access-Control-Allow-Origin: localhost:5500'); // Define que a API pode ser utilizada em outras origens
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Rotas (exemplo)
// Router::get('/rota1', minhaFunc);
// Router::get('/rota2', minhaFunc);
// Router::post('/rota3', minhaFunc);
// Router::post('/rota4', minhaFunc);

// Manda ele iniciar o router depois de criar as rotas


// function 

Router::post('/login', 'login');
Router::post('/register', 'register');
Router::get('/user-info', 'user-info');
Router::post('/addContact', 'addContact');
Router::post('/sendMessage','sendMessage');
Router::get('/getMessage','getMessage');

Router::handleRequests();
