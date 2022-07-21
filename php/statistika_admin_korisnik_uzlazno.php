<?php

include 'ukljuci.php';


ob_start();

$response= array();



$bp = new Baza();

$bp->spojiDB();

$sql = "select korisnik.korisnicko_ime,count(dnevnik.korisnik_id_korisnik) as broj from dnevnik join korisnik on dnevnik.korisnik_id_korisnik=korisnik.id_korisnik GROUP by korisnik.korisnicko_ime asc  ";
$r = $bp->selectDB($sql);



while($row = $r->fetch_assoc()){
    $response[] = array("broj"=>"{$row['broj']}","ime"=>"{$row['korisnicko_ime']}"); 
    
}



echo json_encode($response);