<?php

include_once "db.php";

//header('Access-Control-Allow-Origin: *');

$result = DBAccess::singleColumn("SELECT data FROM movies");
for ($i=0; $i<count($result); ++$i) {
  $result[$i] = json_decode($result[$i]);
}

print json_encode($result, JSON_PRETTY_PRINT);

?>