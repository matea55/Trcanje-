
<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/statistika_reg.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Moja statistika</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odaberi državu za prikaz završenih etapa</legend>
        
        <select name="biramDrzavu" id="biramDrzavu">

        </select>
        
        <input class="gumb" type="submit" id="prikaziPoDrzavi" value="Odaberi" >
    </fieldset>
    
    <div id="statReg">

    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Prikaži cijeli popis</legend>
        
        
        <input class="gumb" type="submit" id="prikaziSveZavrsene" value="Pokaži" >
    </fieldset>
        </fieldset>
</main>