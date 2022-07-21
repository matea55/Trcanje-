<?php
include 'ukljuci.php';
ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");
$odabran = $_GET["odabran"];

$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'UPDATE', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);


$sql="update sudjeluje set status='Odustao' where korisnik_id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}' and etapa_id_etapa='$odabran')";
$rs = $bp->selectDB($sql);




echo json_encode("ok");