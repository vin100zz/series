<?php

include_once "db.php";

//header('Access-Control-Allow-Origin: *');

$id = $_GET["id"];

$result = DBAccess::singleRow("SELECT * FROM movies WHERE id='$id'");

$data = json_decode($result["data"], true);
$data["status"] = ($data["status"] == "0" ? "1" : "0");
$data = json_encode($data);

$data = str_replace("'", "''", $data);

DBAccess::exec("UPDATE movies SET data='$data' WHERE id='$id'");

$movie = DBAccess::singleValue("SELECT data FROM movies WHERE id='$id'");
$movie = json_decode($movie);
print json_encode($movie, JSON_PRETTY_PRINT);

?>