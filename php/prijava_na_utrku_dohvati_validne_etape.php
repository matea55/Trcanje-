<?php
include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");




$sql = "SELECT id_etapa,datum_vrijeme,duljina_etape,utrka_id_utrka,drzava.naziv_drzave from etapa join utrka on utrka_id_utrka=id_utrka join drzava on drzava_id_drzava=id_drzava where datum_vrijeme>'$datum' and Status_etape='Otkljucan'";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id"=>"{$row['id_etapa']}","vr"=>"{$row['datum_vrijeme']}","duljina"=>"{$row['duljina_etape']}","utrka"=>"{$row['utrka_id_utrka']}","drzava"=>"{$row['naziv_drzave']}"); 
    
}


echo json_encode($response);
