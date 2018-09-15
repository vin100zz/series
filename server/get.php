<?php

include_once "db.php";

$id = $_GET["id"];
$type = $_GET["type"];

$show = DBAccess::singleRow("SELECT * FROM shows WHERE id='$id' AND type='$type'");
if (!$show) {
  return;
}

$show["data"] = json_decode($show["data"]);
print json_encode($show, JSON_PRETTY_PRINT);

?>