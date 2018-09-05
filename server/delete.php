<?php

include_once "db.php";

//header('Access-Control-Allow-Origin: *');

$id = $_GET["id"];

DBAccess::exec("DELETE FROM movies WHERE id='$id'");

?>
