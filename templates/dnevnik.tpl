<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/dohvati_dnevnik.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Dnevnik</legend>
    <div>
        Pretraži po vremenu radnje<br>
        <label for="od">Od:</label>
        <input type="datetime-local" id="od" name="od">
        <label for="do">Do:</label>
        <input type="datetime-local" id="do" name="do">
         <input class="gumb" type="submit" id="vrijemePotvrdi" name="vrijemePotvrdi" value="Potvrdi">
    </div>
    <div>
        Pretraži po tipu zapisa<br>
        <select name="zapis" id="zapis">

        </select>
        <input class="gumb" type="submit" id="zapisSort" name="zapisSort" value="Potvrdi">
    </div>
    <div>
        Pretraži po korisniku<br>
        <select name="korisnik" id="korisnik">

        </select>
        <input class="gumb" type="submit" id="korisnikSort" name="korisnikSort" value="Potvrdi">
    </div>
    <div id="dnevnikPokazi">


    </div>
    <div>
        
        <input class="gumb" type="submit" id="vrati" name="vrati" value="Vrati na početni prikaz">
    </div>
        </fieldset>
</main>

