
<main>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/provjeraPrijava.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    <div class="omotac">
        <div class="omotacdijete">
            <fieldset>
        <legend style="font-size: larger; font-style: bold">Prijava</legend>
    <form id="forma-prijava" name="forma-prijava" action="{$smarty.server.PHP_SELF}" method="post">
        <div>
            <label id="labela-kor" for="korime">Korisničko ime</label>
            <input name="korimeP" id="korimeP" type="text" maxlength="30" required value="{$zapamti_me}">
        </div>
        <div>
            <label id="labela-loz" for="lozinkaP">Lozinka</label>
            <input name="lozinkaP" id="lozinkaP" type="password" maxlength="30" required>
        </div>
        <div>
            <label id="zapamti" for="zapamti_me">Zapamti me</label>
            <input type="checkbox" id="zapamti_me" name="zapamti_me" value="da">
        </div>
        <button id="prijavi" name="prijavi" value="prijavi" type="submit">Prijavi se</button>

        <a id="zaboravljena">Zaboravljena lozinka</a>
    </form>
        </fieldset>
        </div>
    </div>

    
</main>