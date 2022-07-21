<?php include 'ukljuci.php';

$trenutna_str = basename($_SERVER['PHP_SELF']);
$smarty->assign("trenutna_stranica", $trenutna_str);
//echo $trenutna_str." ";


//$polje = array(Sesija::dajKorisnika());
//var_dump(Sesija::dajKorisnika());
//var_dump($_SESSION["uloga"]);
if(isset($_SESSION["uloga"])){
    if($_SESSION["uloga"]>$pristup){
        header("location:../index.php");
    }

}





$smarty->assign("odjava", "odjava.php");
//$smarty->assign("odjava", "../");
$smarty->assign("css", "../css/");



if ($trenutna_str === 'rang_lista_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("registracija", "registracija.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("prijava", "prijava.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    
}

if ($trenutna_str === 'dnevnik_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    
}

if ($trenutna_str === 'korisnicki_racuni_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}

if ($trenutna_str === 'rang_lista_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("prijava", "prijava.php");
    $smarty->assign("registracija", "registracija.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}

if ($trenutna_str === 'prijava.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("registracija", "registracija.php");

    
}

if ($trenutna_str === 'registracija.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("prijava", "prijava.php");

    
}

if ($trenutna_str === 'statistika_mod_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}

if ($trenutna_str === 'prijava_na_utrku_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}
if ($trenutna_str === 'moja_statistika_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}
if ($trenutna_str === 'etape_koje_vodim_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}
if ($trenutna_str === 'statistika_rada_sustava_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}
if ($trenutna_str === 'definiranje_utrke_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    $smarty->assign("def_drzava", "definiranje_drzave_PRIKAZ.php");
    
}
if ($trenutna_str === 'definiranje_drzave_PRIKAZ.php') {
    $smarty->assign("naslov", "Početna");
    $smarty->assign("rang", "rang_lista_PRIKAZ.php");
    $smarty->assign("racuni", "korisnicki_racuni_PRIKAZ.php");
    $smarty->assign("dnevnik", "dnevnik_PRIKAZ.php");
    $smarty->assign("etape", "statistika_mod_PRIKAZ.php");
    $smarty->assign("prijava_utrka", "prijava_na_utrku_PRIKAZ.php");
    $smarty->assign("statistika", "moja_statistika_PRIKAZ.php");
    $smarty->assign("vodim_etape", "etape_koje_vodim_PRIKAZ.php");
    $smarty->assign("nezavrsene", "statistika_rada_sustava_PRIKAZ.php");
    $smarty->assign("def_utrka", "definiranje_utrke_PRIKAZ.php");
    $smarty->assign("pocetna", "../index.php");
    
}

if ($trenutna_str != 'validacija_koda.php') {
    $smarty->display("zaglavlje.tpl");
}




