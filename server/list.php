<?php

include_once "db.php";

header('Access-Control-Allow-Origin: *');

$result = DBAccess::query("SELECT * FROM movies");

print json_encode($result, JSON_PRETTY_PRINT);

?>