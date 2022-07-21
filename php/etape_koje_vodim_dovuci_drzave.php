<?php

include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();

$datum=date("Y-m-d h:i:s");


$s = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, upit, korisnik_id_korisnik) values ('Rad s bazom','$datum' ,'SELECT', (select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}'))";
$r = $bp->selectDB($s);

$sql = "select distinct naziv_drzave from drzava, moderira, korisnik where drzava.id_drzava=moderira.drzava_id_drzava and moderira.korisnik_id_korisnik=(select id_korisnik from korisnik where korisnicko_ime='{$_SESSION["korisnik"]}')";

$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("drzava"=>"{$row['naziv_drzave']}"); 
    

    
}


echo json_encode($response);