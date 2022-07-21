<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$utrka = $_GET["etapa"];
$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "SELECT id_etapa from etapa where utrka_id_utrka=$utrka and Status_etape='Otkljucan'";
$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("id"=>"{$row['id_etapa']}"); 
    

    
}


echo json_encode($response);