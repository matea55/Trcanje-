<?php

include 'ukljuci.php';


ob_start();

$utrka = $_GET["utrka"];
$naziv = $_GET["naziv"];
$dat = $_GET["dat"];

$drzava = $_GET["drzava"];

$bp = new Baza();

$bp->spojiDB();
$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'UPDATE', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "update utrka set drzava_id_drzava = (select id_drzava from drzava where naziv_drzave='$drzava'), vrsta_utrke='$naziv', zavrsetak_prijave='$dat' where id_utrka = '$utrka'";

$rs = $bp->selectDB($sql);





echo json_encode("ok");