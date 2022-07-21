<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");




$sql = "SELECT distinct id_etapa,etapa.datum_vrijeme,duljina_etape,utrka_id_utrka,drzava.naziv_drzave,mjesto,sudjeluje.bodovi,sudjeluje.status,minute from korisnik join sudjeluje on (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}')=korisnik_id_korisnik join etapa on etapa_id_etapa=id_etapa join utrka on utrka_id_utrka=id_utrka join drzava on drzava_id_drzava=id_drzava where etapa.datum_vrijeme<'$datum'";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id"=>"{$row['id_etapa']}","vr"=>"{$row['datum_vrijeme']}","duljina"=>"{$row['duljina_etape']}","utrka"=>"{$row['utrka_id_utrka']}","drzava"=>"{$row['naziv_drzave']}","mjesto"=>"{$row['mjesto']}","bodovi"=>"{$row['bodovi']}","status"=>"{$row['status']}","minute"=>"{$row['minute']}"); 
    
}


echo json_encode($response);