<?php

include 'ukljuci.php';


ob_start();

$response= array();
$drzava = $_GET["drzava"];

$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "SELECT * FROM utrka where drzava_id_drzava =(select id_drzava from drzava where naziv_drzave='$drzava')";

$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    $response[] = array("naziv"=>"$drzava","id"=>"{$row['id_utrka']}","popis"=>"{$row['vrsta_utrke']}","rok"=>"{$row['zavrsetak_prijave']}"); 
    

    
}


echo json_encode($response);
