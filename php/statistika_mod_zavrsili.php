<?php

include 'ukljuci.php';


ob_start();

$response= array();



$bp = new Baza();

$bp->spojiDB();

$sql = "SELECT count(status) as broj, etapa_id_etapa from sudjeluje WHERE status='Zavrsio' GROUP by etapa_id_etapa";
$r = $bp->selectDB($sql);



while($row = $r->fetch_assoc()){
    $response[] = array("broj"=>"{$row['broj']}","id"=>"{$row['etapa_id_etapa']}"); 
    
}



echo json_encode($response);