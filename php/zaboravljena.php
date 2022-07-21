<?php
require 'ukljuci.php';

ob_start();
$sadrzaj = array();
$bp = new Baza();

$bp->spojiDB();
$korime = $_GET["korime"];

$sql = "SELECT * from korisnik where korisnicko_ime = '$korime'";
$rs = $bp->selectDB($sql);
$rs=$rs->fetch_assoc();

$nova= generirajLozinku();

$sql = "Update korisnik set lozinka='$nova' where korisnicko_ime = '$korime'";
$bp->selectDB($sql);

mail($rs["Email"],"Nova lozinka",$nova);
fb("tu ".$nova." ".$rs["Email"], FirePHP::LOG);

function generirajLozinku() {
    $charBr = '0123456789';
    $charSl='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < 4; $i++) {
        $index = rand(0, strlen($charSl) - 1);
        $randomString .= $charSl[$index];
    }
    for ($i = 0; $i < 2; $i++) {
        $index = rand(0, strlen($charBr) - 1);
        $randomString .= $charBr[$index];
    }

    return $randomString;
}
