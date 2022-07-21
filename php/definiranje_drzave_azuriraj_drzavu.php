<?php

include 'ukljuci.php';


ob_start();

$nDrzava = $_GET["drzava"];
$sDrzava = $_GET["odabranaDrzava"];

$bp = new Baza();

$bp->spojiDB();
$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'UPDATE', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);
//fb($nDrzava."".$sDrzava, FirePHP::LOG);
$sql = "update drzava set naziv_drzave = '$nDrzava' where naziv_drzave = '$sDrzava'";

$rs = $bp->selectDB($sql);





echo json_encode("ok");