<?php


include 'ukljuci.php';

$trenutna_str = basename($_SERVER['PHP_SELF']);
//$smarty->display("zaglavlje.tpl");
$smarty->assign("trenutna_stranica", $trenutna_str);
$smarty->assign("css", "css/");
//
//$uloga = $_SESSION['uloga'];
//echo $uloga;

if(isset($_SESSION["uloga"])){
    if($_SESSION["uloga"]>$pristup){
        header("location:index.php");
    }

}

$smarty->assign("odjava", "php/odjava.php");

if ($trenutna_str === 'index.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "php/rang_lista_PRIKAZ.php");
    $smarty->assign("etape", "php/statistika_mod_PRIKAZ.php");
    $smarty->assign("registracija", "php/registracija.php");
     $smarty->assign("prijava", "php/prijava.php");
    $smarty->assign("prijava_utrka", "php/prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "php/moja_statistika_PRIKAZ.php");
    $smarty->assign("racuni", "php/korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("vodim_etape", "php/etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("dnevnik", "php/dnevnik_PRIKAZ.php");
    $smarty->assign("nezavrsene", "php/statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "php/definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "php/definiranje_drzave_PRIKAZ.php");
    
}

if ($trenutna_str != 'php/validacija_koda.php') {
    $smarty->display("zaglavlje.tpl");
}