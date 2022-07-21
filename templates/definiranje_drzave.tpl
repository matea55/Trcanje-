
<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/drzave.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Definiranje države</legend>
    <div id="pokaziDrzave">
        

    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Nova država</legend>
    <label for="unesi">Unesi novu državu</label>
    <input type="text" id="unesiDrzavu" name="unesi" >
    <input class="gumb" type="submit" id="potvrdiDrzavu" value="Potvrdi unos" >
        </fieldset>

    <br><br>
    
    
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Ažuriranje države</legend>
    <select name="cmbDrzave" id="cmbDrzave">

    </select>
    <label for="unesi">Unesi novi naziv</label>
    <input type="text" id="azurirajDrzavu" name="azurirajDrzavu" >
    <input class="gumb" type="submit" id="potvrdiAzurDrzave" value="Potvrdi ažuriranje" >
    </fieldset>
    <br><br>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Dodjela moderatora državi</legend>
    
    <select name="moderatori" id="moderatori">

    </select>
    
     <select name="drzaveDodijeli" id="drzaveDodijeli">

    </select>
    
    <input class="gumb" type="submit" id="potvrdiDodjelu" value="Potvrdi Dodjelu" >
    </fieldset>
    </fieldset>
</main>