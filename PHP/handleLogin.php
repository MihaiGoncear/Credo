<?php 
require_once("./core.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'];
    $password = $data['password'];

    $sql = Database::prepare_bind(
        "SELECT * FROM `users` WHERE `username` = ? AND `password` = ?", 
        "ss", 
        [$username, $password]
    );

    $result = Database::execute_get_result($sql);
    if ($result) {
        $token = bin2hex(random_bytes(64));
        $sql = Database::prepare_bind(
            "UPDATE `users` SET `token` = ? WHERE `username` = ?",
            "ss",
            [$token, $username]
        );
        $result = Database::execute($sql);
        if ($result) {
            returnJSON(["token" => $token]);
        } else {
            returnJSON(["error" => "Error Occurred"]);
        }
    } else {
        returnJSON(["error" => "Error Occurred"]);
    }

    
}
