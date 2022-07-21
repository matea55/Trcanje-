<?php
require 'ukljuci.php';
$bp = new Baza();

$bp->spojiDB();

$regmail = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";
$regpass = "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/";

function generirajSol() {
    $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < 32; $i++) {
        $index = rand(0, strlen($char) - 1);
        $randomString .= $char[$index];
    }

    return $randomString;
}

function generirajKod() {
    $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < 10; $i++) {
        $index = rand(0, strlen($char) - 1);
        $randomString .= $char[$index];
    }

    return $randomString;
}

if (isset($_POST['posalji'])) {
    $datum_registracije = date('Y-m-d H:i:s');
    $greske = 0;
    $preime = $_POST['imeprezime'];
    $korime = $_POST['korime'];
    $email = $_POST['email'];
    $lozinka = $_POST['lozinka'];
    $lozinkaPonovljena = $_POST['ponoviLozinku'];
    
//    if(!isset($_POST['imeprezime']) ||!isset($_POST['korime']) ||!isset($_POST['email']) ||!isset($_POST['lozinka']) ||!isset($_POST['ponoviLozinku']) ){
//        echo "[Strana poslužitelj] Sva polja moraju biti popunjena<br>";
//        $greske++;
//    }
    
    
    if (isset($_POST['uvjet'])) {
        
        $uvjet = date('Y-m-d H:i:s');
    }
    else{
        echo "[Strana poslužitelj] Morate prihvatiti uvjete korištenja<br>";
        $greske++;
    }
    
    if(strlen($korime)<5){
        echo "[Strana poslužitelj] Korisničko ime je prekratko<br>";
    }



    if (preg_match($regmail, $email) != 1) {
        echo "[Strana poslužitelj] Mail nije u ispravnom formatu<br>";
        $greske++;
    }

    if (preg_match($regpass, $lozinka) != 1) {
        echo "[Strana poslužitelj] Lozinka mora imati najmanje 6 znakova i sadržavati barem jedno slovo i jedan broj<br>";
        $greske++;
    }
    
    if($lozinka!=$lozinkaPonovljena){
        echo "[Strana poslužitelj] Lozinke se ne poklapaju<br>";
        $greske++;
    }

    if ($greske === 0) {
        $sol = generirajSol();
        $hash = hash('sha256',$sol . $lozinka);
        
        $kod = generirajKod();
        
        $sql = "INSERT INTO korisnik (naziv, korisnicko_ime, email, lozinka, sol,lozinka_sha256, Aktivacijski_kod, status, datum_vrijeme, uvjeti_koristenja, Broj_pokusaja,uloga_id_uloga,postavke_id_postavke) "
                . "values ('$preime','$korime','$email','$lozinka','$sol','$hash','$kod',1,'$datum_registracije','$uvjet',0,3,NULL)";
        $rs = $bp->selectDB($sql);
        
        mail($email,"Aktivacijski kod za registraciju",$kod);
        
    }
    


    

    $_SESSION["korime"] = $korime;
    
    header("Location: validacija_koda.php");

//    if (mysqli_num_rows($rs) > 0) {
//        echo $korime;
//    }
    
}



if ($bp->pogreskaDB()) {
    echo "Problem kod upita na bazu podataka!";
    exit;
}
$bp->zatvoriDB();
