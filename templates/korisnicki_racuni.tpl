<main>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/racuni_korisnika.js"></script>
        <link rel="stylesheet" href="../css/sve.css">

        <fieldset>
        <legend style="font-size: larger; font-style: bold">Korisnički računi</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odaberi id za odblokiranje korisnika</legend>

        <select name="odblokiraj" id="odblokiraj">

        </select>
        <input class="gumb" type="submit" id="odblok" value="Odblokiraj" >

    </fieldset>
        <h3>Blokirani</h3>

    <div id="racuniO">


    </div>
        <br>
    <br>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odaberi id za blokiranje korisnika</legend>
        <select name="blokiraj" id="blokiraj">

        </select>
        <input class="gumb" type="submit" id="blok" value="Blokiraj" >

    </fieldset>
    <h3>Neblokirani</h3>

    <div id="racuniB">


    </div>
</fieldset>

</main>
