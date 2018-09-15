<?php

include_once "db.php";

$id = $_GET["id"];
$type = $_GET["type"];

$status = DBAccess::singleValue("SELECT status FROM shows WHERE id='$id' AND type='$type'");

$newStatus = $status == 0 ? 1 : 0;
DBAccess::exec("UPDATE shows SET status=$newStatus WHERE id='$id' AND type='$type'");

$show = DBAccess::singleRow("SELECT * FROM shows WHERE id='$id' AND type='$type'");
$show["data"] = json_decode($show["data"]);
print json_encode($show, JSON_PRETTY_PRINT);

?>