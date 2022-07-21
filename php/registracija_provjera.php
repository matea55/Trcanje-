<?php

require 'ukljuci.php';

$bp = new Baza();

$bp->spojiDB();

if (isset($_GET['korime'])) {
    $return_arr = array();

    $korime = $_GET['korime'];
    $sql = "SELECT * FROM korisnik WHERE korisnicko_ime='$korime'";
    $rs = $bp->selectDB($sql);

    if (mysqli_num_rows($rs) > 0) {
        echo json_encode("postoji");
    }
    else{
        echo json_encode("slobodan");
    }
    

    
    

//    if (mysqli_num_rows($rs) > 0) {
//        //echo "Korisnik ne postoji u bazi";
//    }
//    else{
//        //echo "Korisničko ime ok";
//        header("HTTP/1.1 200 OK");
//    }
}



if ($bp->pogreskaDB()) {
    echo "Problem kod upita na bazu podataka!";
    exit;
}
$bp->zatvoriDB();
