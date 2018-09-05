<?php

include_once "db.php";

//header('Access-Control-Allow-Origin: *');

$id = $_GET["id"];

$movie = DBAccess::singleValue("SELECT data FROM movies WHERE id='$id'");
$movie = json_decode($movie);
print json_encode($movie, JSON_PRETTY_PRINT);

?>