<?php

include_once "db.php";

$id = $_GET["id"];
$type = $_GET["type"];
$watched = $_GET["watched"];
$toWatch = $_GET["toWatch"];
$data = utf8_decode(file_get_contents('php://input'));
$data = str_replace("'", "''", $data);

DBAccess::exec("INSERT INTO shows(id, type, watched, towatch, data) VALUES ('$id', '$type', '$watched', '$toWatch', '$data')");

$show = DBAccess::singleRow("SELECT * FROM shows WHERE id='$id' AND type='$type'");
$show["data"] = json_decode($show["data"]);
print json_encode($show, JSON_PRETTY_PRINT);

?>
