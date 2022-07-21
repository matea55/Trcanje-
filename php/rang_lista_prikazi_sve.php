<?php



include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();



$sql="select count(sudjeluje.status='Zavrsio') as 'Zavrsio',korisnik.korisnicko_ime from korisnik join sudjeluje on korisnik.id_korisnik=sudjeluje.korisnik_id_korisnik where sudjeluje.status='Zavrsio' group by korisnik.korisnicko_ime ";
$rs = $bp->selectDB($sql);


while($row = $rs->fetch_assoc()){
    
    
    
    $response[] = array("naziv"=>"{$row['korisnicko_ime']}","zavrsio"=>"{$row['Zavrsio']}"); 
    

    
}


echo json_encode($response);