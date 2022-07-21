<?php


include 'ukljuci.php';


ob_start();

$response= array();



$bp = new Baza();

$bp->spojiDB();

$sql = "SELECT count(*) as broj from sudjeluje where status is not null";
$r = $bp->selectDB($sql);



while($row = $r->fetch_assoc()){
    $response[] = array("broj"=>"{$row['broj']}"); 
    
}



echo json_encode($response);