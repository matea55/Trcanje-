<?php

include 'ukljuci.php';


ob_start();

$response= array();



$bp = new Baza();

$bp->spojiDB();

$sql = "select count(id_dnevnik) as broj from dnevnik";
$r = $bp->selectDB($sql);



while($row = $r->fetch_assoc()){
    $response[] = array("broj"=>"{$row['broj']}"); 
    
}



echo json_encode($response);