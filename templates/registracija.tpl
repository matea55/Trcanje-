<main>
   
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>
    
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../js/provjeraRegistracija.js"></script>
    <link rel="stylesheet" href="../css/sve.css">
    
    <div class="omotac">
        <div class="omotacdijete">
            <fieldset>
        <legend style="font-size: larger; font-style: bold">Registracija</legend>
            <form id="forma-reg" action="registriraj.php" method="post">     
                <input type="hidden" name="posalji" value="treu">
                <div>
                    <label for="imeprezime">Ime i prezime</label>
                    <input id="imeprezime" name="imeprezime" type="text" >
                </div>             
                <div>
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" >
                </div>
                <div>
                    <label for="korime">Korisničko ime</label>
                    <input id="korimee" name="korime" type="text" maxlength="25" >
                </div>
                <div>
                    <label for="lozinka">Lozinka</label>
                    <input id="lozinka" name="lozinka" type="password" maxlength="30" >
                </div>         
                <div>
                    <label for="ponoviLozinku">Lozinka</label>
                    <input id="ponoviLozinku" name="ponoviLozinku" type="password" maxlength="30" >
                </div>  
                <div>
                    <label for="uvjet">Prihvaćam uvjete korištenja</label>
                    <input type="checkbox" id="uvjet" name="uvjet" value="uvjet">
                    <label for="uvjet"> Prihvaćam</label><br>
                    
                </div> 
                
                <div>
                    <input type="submit" value="Registriraj me">
                    
                </div>
                
                <div id="poruke">
                    <div id="valkorime"></div>
                    <div id="valemail"></div>
                    <div id="valpass"></div>
                    <div id="valpasspon"></div>
                </div>
            </form>
        </fieldset>
        </div>
    </div>
        </main>
