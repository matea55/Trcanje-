
<main>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/statistika_admin.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
<fieldset>
        <legend style="font-size: larger; font-style: bold">Statistika sustava</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Prema vremenu</legend>
        <input class="gumb" type="submit" id="vrUz" value="Vremenski uzlazno" >
        <input class="gumb" type="submit" id="vrSiz" value="Vremenski silazno" >
    </fieldset>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Prema korisnicima</legend>
        <input class="gumb" type="submit" id="radnjaUz" value="Prema korisnicima uzlazno" >
        <input class="gumb" type="submit" id="radnjaSiz" value="Prema korisnicima silazno" >
    </fieldset>
    Ukupno zapisa:<div style="font-style: bold" id="ukupno"></div>
    <div id="izabranaStatistika">

    </div>
    
    </fieldset>
</main>
