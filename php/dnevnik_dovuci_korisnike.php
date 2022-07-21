<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$sql = "SELECT korisnicko_ime FROM korisnik";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("korime"=>"{$row['korisnicko_ime']}"); 
    
}


echo json_encode($response);


