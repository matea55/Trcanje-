<?php



include 'ukljuci.php';
$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");
        

$sql = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, korisnik_id_korisnik) values ('Prijava/odjava','$datum' , (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
     $rs = $bp->selectDB($sql);
//////Sesija::obrisiSesiju();
session_unset();
$_SESSION["uloga"]=4;

//header('location: index.php');
header("Refresh:0; url=../index.php");