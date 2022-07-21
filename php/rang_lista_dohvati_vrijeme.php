<?php
include 'ukljuci.php';

ob_start();

$response= array();


$bp = new Baza();

$od = $_GET["odRang"];
$do = $_GET["doRang"];


$bp->spojiDB();

$sql="select count(sudjeluje.status='Zavrsio') as 'Zavrsio',korisnik.korisnicko_ime, etapa.datum_vrijeme from korisnik join sudjeluje on korisnik.id_korisnik=sudjeluje.korisnik_id_korisnik join etapa on sudjeluje.etapa_id_etapa=etapa.id_etapa where sudjeluje.status='Zavrsio' and etapa.datum_vrijeme>'$od' and etapa.datum_vrijeme<'$do' group by korisnik.korisnicko_ime  ";
$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("naziv"=>"{$row['korisnicko_ime']}","zavrsio"=>"{$row['Zavrsio']}"); 
    

    
}



echo json_encode($response);
