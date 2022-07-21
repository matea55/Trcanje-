<?php
include 'ukljuci.php';


ob_start();
$naziv = $_GET["naziv"];
$rok = $_GET["rok"];
$drzava = $_GET["drzava"];

$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'INSERT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "insert into utrka(drzava_id_drzava,vrsta_utrke,zavrsetak_prijave) values ((select id_drzava from drzava where naziv_drzave='$drzava'),'$naziv','$rok')";

$rs = $bp->selectDB($sql);





echo json_encode("ok");