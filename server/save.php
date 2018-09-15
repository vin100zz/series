<?php

include_once "db.php";

$id = $_GET["id"];
$type = $_GET["type"];
$data = utf8_decode(file_get_contents('php://input'));
$data = str_replace("'", "''", $data);

DBAccess::exec("INSERT INTO shows(id, type, status, data) VALUES ('$id', '$type', 0, '$data')");

$show = DBAccess::singleRow("SELECT * FROM shows WHERE id='$id' AND type='$type'");
$show["data"] = json_decode($show["data"]);
print json_encode($show, JSON_PRETTY_PRINT);

?>
