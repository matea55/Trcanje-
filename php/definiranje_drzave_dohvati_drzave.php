<?php
include 'ukljuci.php';


ob_start();

$response= array();


$bp = new Baza();

$bp->spojiDB();
//fb("pozvan", FirePHP::LOG);
$sql = "SELECT naziv_drzave from drzava";

$rs = $bp->selectDB($sql);

while($row = $rs->fetch_assoc()){
    //fb("while", FirePHP::LOG);
    $response[] = array("drzava"=>"{$row['naziv_drzave']}");
    
}



echo json_encode($response);
