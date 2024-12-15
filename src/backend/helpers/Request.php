<?php
class Request {
    public static function getBody() {
        $body = file_get_contents('php://input');
        $data = json_decode($body, true);
        return $data;
    }

    public static function getParam($name) {
        return $_GET[$name];
    }
}