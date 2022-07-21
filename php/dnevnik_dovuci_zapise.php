<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$sql = "SELECT distinct opis_radnje FROM dnevnik";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("zapis"=>"{$row['opis_radnje']}"); 
    
}


echo json_encode($response);