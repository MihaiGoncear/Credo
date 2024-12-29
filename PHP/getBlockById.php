<?php
require_once("./core.php");
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $name = "about_us";
    $sql = Database::prepare_bind(
        "SELECT * FROM `blocks` WHERE `name` = ?",
        "i",
        ["about_us"]
    );
    $result = Database::execute_get_result($sql);
    if ($result) {
        $data = Database::fetch_all($result);
        returnJSON($data);
    } else {
        returnJSON(["error" => "Error Occurred"]);
    }
} else if($_SERVER['REQUEST_METHOD'] == "POST") {
    $data = decodeJSON(file_get_contents('php://input'));
    $name = $data['name'];
    $value_rom = $data['value_rom'];
    $value_eng = $data['value_eng'];
    $value_rus = $data['value_rus'];
    $value_arb = $data['value_arb'];

    $sql = Database::prepare_bind(
        "UPDATE `blocks` SET `value_rom` = ?, `value_eng` = ?, `value_rus` = ?, `value_arb` = ? WHERE `name` = ?",
        "sssss",
        [$value_rom, $value_eng, $value_rus, $value_arb, $name]
    );
    $result = Database::execute($sql);
    if ($result) {
        returnJSON(["success" => "Block updated successfully"]);
    } else {
        returnJSON(["error" => "Error Occurred"]);
    }
} else {
    returnJSON(["error" => "Method not allowed"]);
}