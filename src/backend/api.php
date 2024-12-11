<?php

require 'helpers/Router.php';

// Headers:
header('Content-type: application/json'); // Define que a API vai usar JSON
header('Acess-Control-Allow-Origin: *'); // Define que a API pode ser utilizada em outras origens

function minhaFunc() {
    echo "...";
}

// Rotas (exemplo)
Router::get('/rota1', minhaFunc);
Router::get('/rota2', minhaFunc);
Router::post('/rota3', minhaFunc);
Router::post('/rota4', minhaFunc);

// Manda ele iniciar o router depois de criar as rotas
Router::handleRequests();
