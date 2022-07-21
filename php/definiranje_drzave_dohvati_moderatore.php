<?php
include 'ukljuci.php';

ob_start();

$response= array();



$bp = new Baza();


$bp->spojiDB();
//fb($od, FirePHP::LOG);
$sql = "select korisnicko_ime from korisnik where uloga_id_uloga = 2";
$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    //fb("while", FirePHP::LOG);
    $response[] = array("korime"=>"{$row['korisnicko_ime']}"); 
    
}
    echo json_encode($response);

