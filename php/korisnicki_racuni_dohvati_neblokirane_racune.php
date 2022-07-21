<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();



$sql = "SELECT * from korisnik where status=1 and not korisnicko_ime='{$_SESSION["korisnik"]}'";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id_korisnik"=>"{$row['id_korisnik']}","korime"=>"{$row['korisnicko_ime']}"); 
    
}

echo json_encode($response);