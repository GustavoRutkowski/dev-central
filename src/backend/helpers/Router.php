<?php
class Router {
    private static $routes = array();

    // método que renderiza as rotas conforme o método e path atual
    public static function handleRequests() {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_GET['path'];

        foreach (self::routes as $route) {
            if ($route['method'] !== $method) continue;
            if ($route['path'] !== $path) continue;

            echo call_user_func($route['callback']);
            return;
        }

        echo "
            <h1>404 Not Found</h1>
            <p>{$path} not found</p>
        ";
    }

    private static function addRoute($method, $path, $callback) {
        // ARRAY[] = VALUE // É como usar um ARRAY.push(VALUE) no JavaScript
        self::routes[] = [
            'method' => $method,
            'path' => $path,
            'callback' => $callback
        ];
    }

    // Métodos para criar rotas:
    public function get($path, $callback) {
        self::addRoute('GET', $path, $callback);
    }

    public function post($path, $callback) {
        self::addRoute('POST', $path, $callback);
    }

    public function put($path, $callback) {
        self::addRoute('PUT', $path, $callback);
    }

    public function delete($path, $callback) {
        self::addRoute('DELETE', $path, $callback);
    }
}