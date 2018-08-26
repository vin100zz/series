<?php

include_once "db.php";

header('Access-Control-Allow-Origin: *');

$id = $_REQUEST["id"];
$status = $_REQUEST["status"];

$result = DBAccess::singleRow("SELECT * FROM movies WHERE id='$id'");

if (count($result) == 0) {
  DBAccess::query("INSERT INTO movies(id, status) VALUES ('$id', '$status')");
} else {
  DBAccess::query("UPDATE movies SET status='$status' WHERE id='$id'");
}

$result = DBAccess::singleRow("SELECT * FROM movies WHERE id='$id'");

print json_encode($result, JSON_PRETTY_PRINT);

?>