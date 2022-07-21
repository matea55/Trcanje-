<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, radnja, korisnik_id_korisnik) values ('Ostala radnja','$datum' ,'Ucitavanje stranice', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "SELECT id_utrka,vrsta_utrke,zavrsetak_prijave,drzava.naziv_drzave from utrka join drzava on id_drzava=drzava_id_drzava where zavrsetak_prijave>'$datum'";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    $response[] = array("id"=>"{$row['id_utrka']}","vrsta"=>"{$row['vrsta_utrke']}","prijava"=>"{$row['zavrsetak_prijave']}","drzava"=>"{$row['naziv_drzave']}"); 
    
}


echo json_encode($response);