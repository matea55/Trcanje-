<?php

include 'ukljuci.php';


ob_start();

$response= array();
$etapa = $_GET["etapa"];

$bp = new Baza();

$bp->spojiDB();

//$sql = "SELECT id_etapa,datum_vrijeme,duljina_etape(km),status_etape from etapa where utrka_id_utrka=$etapa";
$sql = "SELECT *from etapa where utrka_id_utrka=$etapa";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    
    $response[] = array("id"=>"{$row['id_etapa']}","datum"=>"{$row['datum_vrijeme']}","duljina"=>"{$row['duljina_etape']}","status"=>"{$row['Status_etape']}"); 
    
}


echo json_encode($response);
