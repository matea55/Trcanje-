<?php

include 'ukljuci.php';


ob_start();
$utrka=$_GET["odabran"];
$godina=$_GET["godina"];
//$slika=$_GET["slika"];
$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'INSERT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "insert into prijava_na_utrku(id_korisnik,id_utrka,slika,datum_rodenja) values ((select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'),'$utrka',NULL,'$godina')";

$rs = $bp->selectDB($sql);





echo json_encode("ok");