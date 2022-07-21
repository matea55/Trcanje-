<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/rang.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    
    <br><br><br>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Rang lista</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odaberi vremensko razdoblje za prikaz završenih etapa</legend>
        <label for="odRang">Od:</label>
        <input type="datetime-local" id="odRang" name="odRang">
        <label for="doRang">Do:</label>
        <input type="datetime-local" id="doRang" name="doRang">      
        
        <input class="gumb" type="submit" id="vrijemeFilter" value="Odaberi" >
        <input class="gumb" type="submit" id="vratiPocetni" value="Vrati početni" >
    </fieldset>
    
    <div id="rang">

    </div>
    </fieldset>
    
</main>