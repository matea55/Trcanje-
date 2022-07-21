
<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/etape.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
<fieldset class="vanjski">
        <legend style="font-size: larger; font-style: bold">Utrke i etape koje vodim</legend>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odabir države koju vodim</legend>
    <select name="DrzaveModerator" id="DrzaveModerator">

    </select>
    <input class="gumb" type="submit" id="prikaziUtrke" value="Prikaži" >
    </fieldset>
    <br>
    <h3>Utrke koje vodim:</h3>
    <div id="utrkeMod">

    </div>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Odabir utrke za prikaz etapa</legend>
    
    <select name="utrkeModerator" id="utrkeModerator">

    </select>
    <input class="gumb" type="submit" id="prikaziEtape" value="Prikaži" >
    </fieldset>
    <div id="etapeMod">

    </div>
    
    
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Dodavanje nove etape</legend>
       
    <label for="novaEtapa">Kilometraža nove etape</label>
    <input type="text" id="novaEtapa" name="novaEtapa" >
    

    <label for="rokEtapa">Dodaj početak</label>
    <input type="datetime-local" id="rokEtapa" name="rokEtapa" >
    <input class="gumb" type="submit" id="dodajNovuEtapu" value="Dodaj" >
    </fieldset>
    <br>

    <select name="etapeCmb" id="etapeCmb">

    </select>
    
    <input class="gumb" type="submit" id="zakljucaj" value="Zaključaj" >


    <h3>Korisnici na odabranoj utrci</h3>
    <div id="korisnici">
        
    </div>
    
    

        


    <br><br>
    <fieldset>
        <legend style="font-size: larger; font-style: bold">Unesi/promijeni rezultat</legend>
    Korisnik 
    <select name="sudjeluju" id="sudjeluju">

    </select>
    Id etape
    <select name="korEtapa" id="korEtapa">

    </select>
    
    <input type="text" placeholder="Mjesto" id="mjesto" >
    <input type="text" placeholder="Bodovi" id="bodovi" >
    <select id="status">
  <option value="zavrsio">Zavrsio</option>
  <option value="odustao">Odustao</option>
  </select>
    <input type="text" placeholder="Minute" id="minute" >

    <input class="gumb" type="submit" id="dodaj" value="Upiši" >
    </fieldset>
   </fieldset>
</main>
