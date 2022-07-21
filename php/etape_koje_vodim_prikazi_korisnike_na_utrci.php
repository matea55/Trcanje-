<?php

include 'ukljuci.php';


ob_start();

$response= array();

$etapa=$_GET["etapa"];

$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "SELECT distinct korisnik.korisnicko_ime, etapa.id_etapa, sudjeluje.mjesto,sudjeluje.bodovi,sudjeluje.status,sudjeluje.minute from korisnik join sudjeluje on korisnik.id_korisnik=sudjeluje.korisnik_id_korisnik join etapa on sudjeluje.etapa_id_etapa=etapa.id_etapa join utrka on etapa.utrka_id_utrka='$etapa'";

$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("id"=>"{$row['korisnicko_ime']}","ime"=>"{$row['id_etapa']}","mjesto"=>"{$row['mjesto']}","bodovi"=>"{$row['bodovi']}","status"=>"{$row['status']}","minute"=>"{$row['minute']}"); 
    

    
}


echo json_encode($response);