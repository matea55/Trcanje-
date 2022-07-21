<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/utrke.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Definiranje utrke</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odabir države za prikaz utrki</legend>
    
    <select name="cmbDrzave" id="cmbDrzave">

    </select>
    <input class="gumb" type="submit" id="prikažiUtrku" value="Prikaži" >
    </fieldset>
    <div id="drzaveUtrke">
        
    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Dodavanje nove utrke</legend>
    
    <input type="text" placeholder="Kategorija utrke" id="novaUtrka" name="novaUtrka" >
    
    <label for="rok">Dodaj rok za prijavu</label>
    <input type="datetime-local" id="rok" name="rok" >
    <input class="gumb" type="submit" id="dodajNovuUtrku" value="Dodaj" >
    </fieldset>
    
    
    
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Ažuriranje postojeće utrke</legend>
        
        <select name="utrkaA" id="utrkaA">

    </select>
    
    <input type="text" placeholder="Nova kategorija utrke" id="azurirajUtrku" name="azurirajUtrku" >
    <label for="rokA">Novi rok za prijavu</label>
    <input type="datetime-local" id="rokA" name="rokA" >
    <input class="gumb" type="submit" id="potvrdiUtrkaA" value="Potvrdi ažuriranje" >
    </fieldset>
      </fieldset>
    
</main>
