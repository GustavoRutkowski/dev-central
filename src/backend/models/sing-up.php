<?php
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['pass'])) {
    echo json_encode([
        "type" => "Error",
        "message" => "Faltam dados obrigatórios (nome, email ou senha)"
    ]);
    exit;
}

$newUser = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'pass' => $_POST['pass']
];

$newUser['pass'] = password_hash($newUser['pass'], PASSWORD_DEFAULT);

require 'connection.php';

$query = 'INSERT INTO users (name, email, pass) VALUES (:nameP, :emailP, :passP)';
$stmt = $conn->prepare($query);

// $stmt->bindParam(':nameP', $newUser['name']);
// $stmt->bindParam(':emailP', $newUser['email']);
// $stmt->bindParam(':passP', $newUser['pass']);
$stmt->bindParam(':nameP', $newUser['name'], PDO::PARAM_STR);
$stmt->bindParam(':emailP', $newUser['email'], PDO::PARAM_STR);
$stmt->bindParam(':passP', $newUser['pass'], PDO::PARAM_STR);



if ($stmt->execute()) {
    $response = [
        "type" => "Success",
        "message" => "Usuário cadastrado com sucesso!"
    ];
    echo json_encode($response);
} else {
    $response = [
        "type" => "Error",
        "message" => "O Usuário não foi cadastrado. Tente novamente."
    ];
    echo json_encode($response);
}
exit;