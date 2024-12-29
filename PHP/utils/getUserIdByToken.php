<?php

function getUserIdByToken($token)
{
    $sql_tkn = Database::prepare_bind(
        "SELECT * FROM `login_tokens` WHERE `user_token` = ?",
        "s",
        [$token]
    );
    $result = Database::execute_get_result($sql_tkn);
    $user = Database::fetch_assoc($result);

    if ($user && isset($user['user_id'])) {
        return $user['user_id'];
    }
    return null;
}
