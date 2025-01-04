<?php

//CORS HANDLE
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_DATABASE = 'credo';
require_once('./classes/Database.php');
require_once('./utils/returnJSON.php');
require_once('./utils/decodeJSON.php');
require_once('./utils/getUserIdByToken.php');
