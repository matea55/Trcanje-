<?php

include 'ukljuci.php';


ob_start();

$response= array();



$bp = new Baza();

$bp->spojiDB();

$sql = "select count(korisnik_id_korisnik) as broj, vrijeme_radnje from dnevnik group by vrijeme_radnje ASC ";
$r = $bp->selectDB($sql);



while($row = $r->fetch_assoc()){
    $response[] = array("broj"=>"{$row['broj']}","vrijeme"=>"{$row['vrijeme_radnje']}"); 
    
}



echo json_encode($response);