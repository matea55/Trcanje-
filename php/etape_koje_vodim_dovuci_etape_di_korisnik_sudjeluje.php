<?php

include 'ukljuci.php';


ob_start();

$response= array();

$kor=$_GET["kor"];
$etapa=$_GET["utrka"];

$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "select distinct etapa_id_etapa from sudjeluje join etapa on etapa_id_etapa=etapa.id_etapa join utrka on etapa.utrka_id_utrka=utrka.id_utrka where sudjeluje.korisnik_id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='$kor') and etapa.utrka_id_utrka='$etapa'";

$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("id"=>"{$row['etapa_id_etapa']}"); 
    

    
}


echo json_encode($response);
