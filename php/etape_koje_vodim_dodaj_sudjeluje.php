<?php

include 'ukljuci.php';


ob_start();

$response= array();

$kor=$_GET["kor"];
$etapa=$_GET["su"];
$mjesto=$_GET["mjesto"];
$bodovi=$_GET["bodovi"];
$status=$_GET["status"];
$minute=$_GET["minute"];


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'UPDATE', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "update sudjeluje set mjesto='$mjesto',bodovi='$bodovi',status='$status',minute='$minute' where korisnik_id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='$kor') and etapa_id_etapa='$etapa'";

$rs = $bp->selectDB($sql);

echo("rok");