<?php

$pristup=4;
require 'zaglavlje.php';


ob_start();

$smarty->display("prijava.tpl");
$smarty->display("podnozje.tpl");


if (isset($_POST['prijavi'])) {
    
    echo"prijava";
    $greska = "";
    $poruka = "";

    if (empty($greska) || 1 === 1) {

        $veza = new Baza();
        $veza->spojiDB();

        $upit = "SELECT * FROM korisnik WHERE korisnicko_ime = '{$_POST["korimeP"]}'";

        $rezultat = $veza->selectDB($upit);

        $rezultat_array = mysqli_fetch_array($rezultat);

        if ($_POST['zapamti_me'] == 'da') {
            setcookie("zapamti_me", $rezultat_array["korisnicko_ime"]);
        }
        
        $lozinka = $_POST["lozinkaP"];
        if (!empty($rezultat_array)) {
            

            var_dump($rezultat_array);
            $salt = $rezultat_array["sol"];
            
    
            if (hash('sha256', $lozinka.$salt) === $rezultat_array["lozinka_sha256"] && $rezultat_array["status"] == 1) {
                
                $upit = "UPDATE korisnik SET Broj_pokusaja = 0 WHERE id_korisnik = {$rezultat_array["id_korisnik"]}";
                $veza->selectAltDB($upit);
                Sesija::kreirajKorisnika($_POST["korimeP"], $rezultat_array["uloga_id_uloga"]);
                
                echo $_SESSION["uloga"] . "<br>";
              
                $korisnik = $rezultat_array["id_korisnik"];
//                
            } else {
                $korisnik_id = $rezultat_array["id_korisnik"];
                $count = $rezultat_array["Broj_pokusaja"];
                $count = $count + 1;
                if ($count >= 3) {

                    $upit = "UPDATE korisnik SET status = 0 WHERE id_korisnik = '$korisnik_id'";
                    $veza->selectAltDB($upit);
                }
                $korisnik_id = $rezultat_array["id_korisnik"];
                $upit = "UPDATE korisnik SET Broj_pokusaja = '$count' WHERE id_korisnik = '$korisnik_id'";
                $veza->selectAltDB($upit);
                //dnevnik
                $datum_prijave = date('Y-m-d H:i:s');
                $datum_prijave = date('Y-m-d H:i:s', strtotime(str_replace('-', '/', $datum_prijave)));
                $korisnik = $rezultat_array["id_korisnik"];


                Sesija::obrisiSesiju();
            }
        }
        
        
        $veza->zatvoriDB();
    }
}

