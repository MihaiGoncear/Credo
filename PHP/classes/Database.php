<?php
class DataBase
{
    private static $instance = null;
    private $mysqli;

    private function __construct($host, $user, $pass, $database)
    {
        $this->mysqli = new mysqli($host, $user, $pass, $database);

        if ($this->mysqli->connect_error) {
            throw new Exception('Connection error: ' . $this->mysqli->connect_error);
        }
    }

    private static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
        }
        return self::$instance;
    }

    private static function error($str)
    {
        $instance = self::getInstance();
        throw new Exception($str . " " . $instance->mysqli->error);
    }

    public static function query($q)
    {
        $instance = self::getInstance();
        return $instance->mysqli->query($q);
    }

    public static function row($q)
    {
        return self::query($q)->fetch_assoc();
    }

    public static function prepare_bind($q, $types, $params)
    {
        $instance = self::getInstance();
        $preparedQuery = $instance->mysqli->prepare($q);
        if (!$preparedQuery) {
            self::error('Prepare error:');
        } else {
            if (!$types) {
                return $preparedQuery;
            }
            if (!$preparedQuery->bind_param($types, ...$params)) {
                self::error('Bind error:');
            }
            return $preparedQuery;
        }
    }

    public static function execute_get_result($bindedQuery)
    {
        $bindedQuery->execute();
        $result = $bindedQuery->get_result();
        return $result;
    }

    public static function execute($bindedQuery)
    {
        $exe = $bindedQuery->execute();
        if (!$exe) {
            self::error('Execute error: ' . $bindedQuery);
        }
        return $exe;
    }

    public static function fetch_all($executedQuery)
    {
        $fetch = $executedQuery->fetch_all(MYSQLI_ASSOC);
        if (!$fetch) {
            return null;
        }
        return $fetch;
    }

    public static function fetch_assoc($executedQuery)
    {
        $fetch = $executedQuery->fetch_assoc();
        if (!$fetch) {
            return null;
        }
        return $fetch;
    }

    public static function fetch_row($executedQuery)
    {
        $fetch = $executedQuery->fetch_row();
        if (!$fetch) {
            return null;
        }
        return $fetch;
    }

    public static function lastInsertedId()
    {
        $instance = self::getInstance();
        return $instance->mysqli->insert_id;
    }

    public static function affected_rows()
    {
        $instance = self::getInstance();
        return $instance->mysqli -> affected_rows;
    }


    public function closeConnection()
    {
        mysqli_close($this->mysqli);
        self::$instance = null;
    }
}