<?php

include 'ukljuci.php';


ob_start();

$response= array();
$km = $_GET["km"];
$vrijeme = $_GET["vrijeme"];
$utrka = $_GET["utrka"];

$bp = new Baza();

$bp->spojiDB();


$sql = "insert into etapa (datum_vrijeme,duljina_etape,Status_etape,utrka_id_utrka) values('$vrijeme','$km','Otkljucan','$utrka')";

$rs = $bp->selectDB($sql);




echo json_encode("ok");
