<?php

include_once "db.php";

$result = DBAccess::query("SELECT * FROM shows");
for ($i=0; $i<count($result); ++$i) {
  $result[$i]["data"] = json_decode($result[$i]["data"]);
}

print json_encode($result, JSON_PRETTY_PRINT);

?>