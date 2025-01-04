<?php

function getUserIdByToken($token)
{
    $sql_tkn = Database::prepare_bind(
        "SELECT * FROM `users` WHERE `token` = ?",
        "s",
        [$token]
    );
    $result = Database::execute_get_result($sql_tkn);
    $user = Database::fetch_assoc($result);

    if ($user) {
        return true;
    }
    return null;
}
