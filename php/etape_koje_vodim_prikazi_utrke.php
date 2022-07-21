<?php

include 'ukljuci.php';


ob_start();

$response= array();
$drzava = $_GET["odabran"];

$bp = new Baza();

$bp->spojiDB();

$sql = "SELECT id_utrka,vrsta_utrke,zavrsetak_prijave from utrka where drzava_id_drzava=(select id_drzava from drzava where naziv_drzave='$drzava')";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id"=>"{$row['id_utrka']}","vrsta"=>"{$row['vrsta_utrke']}","prijava"=>"{$row['zavrsetak_prijave']}"); 
    
}


echo json_encode($response);