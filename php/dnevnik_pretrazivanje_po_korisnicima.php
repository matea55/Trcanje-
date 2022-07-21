<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$odabran = $_GET["odabran"];

$bp->spojiDB();
//fb("pozvan", FirePHP::LOG);

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);
$sql = "SELECT dnevnik.opis_radnje, dnevnik.vrijeme_radnje,dnevnik.upit,dnevnik.radnja, korisnik.korisnicko_ime, uloga.naziv from dnevnik join korisnik on korisnik_id_korisnik=id_korisnik and korisnicko_ime='$odabran' join uloga on uloga_id_uloga=id_uloga order by vrijeme_radnje";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    //fb("while", FirePHP::LOG);
    $response[] = array("opis_radnje"=>"{$row['opis_radnje']}","vrijeme_radnje"=>"{$row['vrijeme_radnje']}","upit"=>"{$row['upit']}","radnja"=>"{$row['radnja']}","korisnicko_ime"=>"{$row['korisnicko_ime']}","naziv"=>"{$row['naziv']}"); 
    
}



echo json_encode($response);
