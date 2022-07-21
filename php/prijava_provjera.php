<?php


require 'ukljuci.php';

ob_start();
$sadrzaj = array(
);
$bp = new Baza();

$bp->spojiDB();
$korime = $_GET['korime'];
$lozinka = $_GET['lozinka'];



$sql = "SELECT * from korisnik where korisnicko_ime = '$korime' and lozinka = '$lozinka'";
$greska = 0;
$rs = $bp->selectDB($sql);
if (mysqli_num_rows($rs) == 1) {
    foreach ($rs as $kljuc => $vrijednost) {
        $brojPokusaja = $vrijednost["Broj_pokusaja"] + 1;
        
        
        Sesija::kreirajKorisnika($korime, $vrijednost["uloga_id_uloga"]);
        $datum=date("Y-m-d h:i:s");
        
        $sql = "INSERT INTO dnevnik (opis_radnje, vrijeme_radnje, korisnik_id_korisnik) values ('Prijava/odjava','$datum' , '{$vrijednost["id_korisnik"]}')";
        $rs = $bp->selectDB($sql);
        

        if ($vrijednost["status"] == "1") {
            echo json_encode("ok");
            $sql = "UPDATE korisnik SET Broj_pokusaja = 0 where korisnicko_ime = '$korime'";
            //echo $sql;
            $greska = 0;
            $rs = $bp->selectDB($sql);
        } else {
            echo json_encode("ne");
        }
    }
} else {
    $sql = "SELECT * from korisnik where korisnicko_ime = '$korime'";
    $greska = 0;
    $rs = $bp->selectDB($sql);
    foreach ($rs as $kljuc => $vrijednost) {
        $brojPokusaja = $vrijednost["Broj_pokusaja"] + 1;
   
        $sql = "UPDATE korisnik SET Broj_pokusaja = {$brojPokusaja} where korisnicko_ime = '$korime'";
        //echo $sql;
        $greska = 0;
        $rs = $bp->selectDB($sql);
        echo json_encode($brojPokusaja);
        if ($brojPokusaja >= 3) {
            $sql = "UPDATE korisnik SET status = 0 where korisnicko_ime = '$korime'";
            //echo $sql;
            $greska = 0;
            $rs = $bp->selectDB($sql);
        }
    }
}