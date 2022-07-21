<?php
$pristup=4;

require 'zaglavlje.php';

$smarty->display("validacija_koda.tpl");
$smarty->display("podnozje.tpl");

if (isset($_GET["kod"])) {
    $bp = new Baza();

    $bp->spojiDB();
    
    $sql = "SELECT Aktivacijski_kod FROM korisnik WHERE korisnicko_ime='{$_SESSION["korime"]}'";
    $rs = $bp->selectDB($sql);
    
    $rs=$rs->fetch_assoc();
    
    $praviKod=$rs["Aktivacijski_kod"];
    
    if($_GET["kod"]==$praviKod){
        $sql="UPDATE korisnik SET validiran = 1 where korisnicko_ime = '{$_SESSION["korime"]}'";
        $rs = $bp->selectDB($sql);
        
        header("location:prijava.php");
    }
    else{
        echo"Krivi kod za validaciju";
    }
}