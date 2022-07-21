<?php

include 'ukljuci.php';


ob_start();

$mod = $_GET["mod"];
$drz = $_GET["drz"];

$bp = new Baza();

$bp->spojiDB();

$sql = "insert into moderira(korisnik_id_korisnik, drzava_id_drzava)values ((select id_korisnik from korisnik where korisnicko_ime='$mod'),(select id_drzava from drzava where naziv_drzave='$drz'))";

$rs = $bp->selectDB($sql);


if($rs>=1){
    echo json_encode("dodano");
}