//l
$(document).ready(function () {

    var uspjeh = "";
    function result(r) {
        uspjeh = r;//assigning value return
        console.log("countAnchors: ", uspjeh);
    }

    $("#zaboravljena").click(function () {
        var korime = $("#korimeP").val();
        $.ajax({
            type: "get",
            url: "../php/zaboravljena.php?korime=" + korime


        })
                .done(function(){
                    alert("Lozinka poslana na mail");
                })
    });

    var brojPokusaja = 0;
    function dohvati() {
        var odg = false;
        var korime = $("#korimeP").val();
        var lozinka = $("#lozinkaP").val();
        var zapamti = $("#zapamti_me").val();
        $.ajax({
            type: "get",
            url: "../php/prijava_provjera.php?korime=" + korime + "&lozinka=" + lozinka,

            dataType: "json",
            success: function (response) {
                console.log(zapamti);
                var sadrzaj = "";

                if (response === "ok") {


                    //$("#forma1").submit();
                    //document.getElementById("submit1").click();
                    document.getElementById("forma-prijava").dispatchEvent(new Event('submit'));
                    window.location.replace("../index.php");

                    uspjeh = result(true);
                } else
                {
                    brojPokusaja = response;
                    console.log("BROJ POKUSAJA " + brojPokusaja);
                    uspjeh = result(false);
                    if (brojPokusaja < 3) {


                        alert("Korisnik ne postoji ili je lozinka neispravna. Preostali broj pokušaja: " + (3 - brojPokusaja).toString());
                    } else {
                        alert("zakljucan racun");
                    }

                }
            }
        });

    }

    $('#forma-prijava').on('submit', function (e) {
        e.preventDefault();
        dohvati();

    });

//    function dohvati(){
//        $.ajax({
//        type:"get",
//        datatype:"XML",
//        url:"../dohvacanjeIzBaze.php?korime="+korime,
//        success:funcion(podatak){
//            window.location.href="index.php";
//        },
//        error:funcion(){}
//        
//    });
//    }


});

//dobiveni xml prek successa 
