<?php

$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=naqaanature", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "<div id='alert'>تم الإتصال بقاعدة البيانات بنجاح</div>";
} catch(PDOException $e) {
  echo "<div id='alert'>فشل الإتصال بقاعدة البيانات</div>" . $e->getMessage();
}

?>