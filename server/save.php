<?php

include_once "db.php";

//header('Access-Control-Allow-Origin: *');

$id = $_GET["id"];
$data = utf8_decode(file_get_contents('php://input'));

$data = str_replace("'", "''", $data);
$data = str_replace("\"status\":-1", "\"status\":0", $data);

DBAccess::exec("INSERT INTO movies(id, data) VALUES ('$id', '$data')");

$movie = DBAccess::singleValue("SELECT data FROM movies WHERE id='$id'");
$movie = json_decode($movie);
print json_encode($movie, JSON_PRETTY_PRINT);

?>
