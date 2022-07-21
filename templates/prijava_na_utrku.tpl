
<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/utrka.js"></script>
        <link rel="stylesheet" href="../css/sve.css">

<fieldset>
        <legend style="font-size: larger; font-style: bold">Prijava na utrku</legend>
    <h3>Dostupne utrke</h3>
    <div id="validne">

    </div>
    
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Prijava na odabranu utrku</legend>
        Odaberi ID utrke na koju se želiš prijaviti
        <select name="biramUtrku" id="biramUtrku">

        </select>
        <br>
        <label for="rodenje">Godina rođenja:</label>
        <input type="date" id="rodenje" name="rodenje" >
        <br>
        <label for="slika">Priloži sliku:</label>
        <input type="file" id="slika" name="slika" >
        <br>
        <input type="submit" id="prijaviMe" value="Prijavi se" >
    </fieldset>
    
    <h3>Moje prijave na utrku</h3>
    <div id="moje_utrke">
        
    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Ažuriraj</legend>
        Odaberi ID utrke koju želiš ažurirati
        <select name="neisteknute" id="neisteknute">

        </select>
        <br>
        <label for="rodenjeUp">Godina rođenja:</label>
        <input type="date" id="rodenjeUp" name="rodenjeUp" >
        <br>
        <label for="slikaUp">Priloži sliku:</label>
        <input type="file" id="slikaUp" name="slikaUp" >
        <br>
        <input type="submit" id="azuriraj" value="Ažuriraj prijavu" >
    </fieldset>
    
    <h3>Dostupne etape</h3>
    <div id="dostupneEtape">
        
    </div>
    
    <h3>Moje prošle etape</h3>
    <div id="mojeProsleEtape">
        
    </div>
    <h3>Moje buduće etape</h3>
    <div id="mojeBuduceEtape">
        
    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Dodaj novu etapu</legend>
        Odaberi ID etape za koju se prijavljuješ
        <select name="biramEtapu" id="biramEtapu">

        </select>
        
        <br>
        <input type="submit" id="etapaPrijava" value="Prijava na etapu" >
    </fieldset>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odustani od etape</legend>
        Odaberi ID etape od koje odustaješ
        <select name="odustaniEtapa" id="odustaniEtapa">

        </select>
        
        <br>
        <input type="submit" id="etapaOdustani" value="Odustani" >
    </fieldset>
    </fieldset>
</main>