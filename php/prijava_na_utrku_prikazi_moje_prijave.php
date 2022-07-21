<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Ostala radnja','$datum' ,'Prikaz korisnikovih prijava', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "select distinct utrka.id_utrka, utrka.vrsta_utrke,utrka.zavrsetak_prijave,drzava.naziv_drzave from drzava join utrka on drzava.id_drzava=utrka.drzava_id_drzava join prijava_na_utrku on utrka.id_utrka=prijava_na_utrku.id_utrka join korisnik on prijava_na_utrku.id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}')";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id"=>"{$row['id_utrka']}","vrsta"=>"{$row['vrsta_utrke']}","prijava"=>"{$row['zavrsetak_prijave']}","drzava"=>"{$row['naziv_drzave']}"); 
    
}


echo json_encode($response);