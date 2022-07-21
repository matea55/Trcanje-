<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$drzava=$_GET["odabran"];

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql="SELECT distinct count(status='Zavrsio') as 'Zavrsio', drzava.naziv_drzave from sudjeluje join etapa on sudjeluje.etapa_id_etapa=etapa.id_etapa join utrka on etapa.utrka_id_utrka=utrka.id_utrka join drzava on utrka.drzava_id_drzava=drzava.id_drzava where sudjeluje.korisnik_id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}') and status='Zavrsio' and drzava.id_drzava=(select id_drzava from drzava where naziv_drzave='$drzava') group by naziv_drzave";
$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("naziv"=>"{$row['naziv_drzave']}","zavrsio"=>"{$row['Zavrsio']}"); 
    

    
}


echo json_encode($response);