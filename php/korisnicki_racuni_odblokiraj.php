<?php
include 'ukljuci.php';


ob_start();

$id = $_GET["kor"];

$response= array();

$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, radnja, korisnik_id_korisnik) values ('Ostala radnja','$datum' ,'Odbokiranje korisnika', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql="UPDATE korisnik SET status = 1 where id_korisnik = '$id'";

$rs = $bp->selectDB($sql);


echo json_encode("ok");