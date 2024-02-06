<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "naqaanature";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";

$result = $conn->query($sql);

if ($result->num_rows > 0) {

  // output data of each row

    $i = 1;

    $products = "";

    while($row = $result->fetch_assoc()) {

    if($i < 10){

        $num = "0" . $i;

    }else{

        $num = $i;
        
    }
            
    $product = "var product_".$num." = {

    id                   : ".$row["id"]." ,
    name_ar              : `".$row["name_ar"]."` ,
    name_eng             : `".$row["name_eng"]."` ,
    size_ar              : `".$row["size_ar"]."` ,
    size_eng             : `".$row["size_eng"]."` ,
    imgsrc               : `".str_replace('\\','/',$row["imgsrc"])."` ,
    type                 : `".$row["type"]."` ,
    price                : ".$row["price"]." ,
    discount             : ".$row["discount"]." ,
    price_after_discount : `".$row["price_after_discount"]."` ,
    discription_ar       : `".$row["discription_ar"]."` ,
    discription_eng      : `".$row["discription_eng"]."`

    };\n\n";

    $products .= $product;

    // $myfile = fopen("product_".$num.".js", "w") or die("Unable to open file!");

    // fwrite($myfile, $product);

    // fclose($myfile);

        $i++;

}
} else {
  echo "0 results";
}

$products.= "var products = [\n\n";

for( $l = 1 ; $l < $i  ; $l++ ){
    if($l < 10){$num = "0".$l;}else{$num = $l;}
    if($l < $i - 1){
        $products.= "product_".$num.",\n";
    }else{
        $products.= "product_".$num."\n";
    }
}

$products .= "\n];";

$myfile = fopen("products.js", "w") or die("Unable to open file!");

fwrite($myfile, $products);

fclose($myfile);

$conn->close();

?>