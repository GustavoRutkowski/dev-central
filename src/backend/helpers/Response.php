<?php
class Response {
    public static function status($status_code) {
        http_response_code($status_code);
    }

    public static function json($info) {
        echo json_encode($info);
    }
}