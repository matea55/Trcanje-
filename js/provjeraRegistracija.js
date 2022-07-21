
//$(document).ready(function(){
//function provjeriPodatke() {
//        
        
        
       
//        var email=$("#email").val();
//        var uvjeti = $("#uvjet").val();
//        
//        console.log(korime);
//        console.log(lozinka);
//        console.log(lozPonovljena);
//        console.log(email);
//        console.log(uvjeti);
//        
//
//    }
//
//    $('#forma-reg').on('submit', function (e) {
//        e.preventDefault();
//        dohvati();
//      
//    });
//
//});

var regmail = "/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/";

$(document).ready(function(){
    
    var postoji = 0;
    $("#forma-reg").submit(function(event){
        var greska=0;
        var korime = $("#korimee").val();
        if(korime.length < 5){
            //document.querySelector('#valkorime').innerHTML = 'jsfgj';


            greska++;
        }

        var lozinka=$("#lozinka").val();
        if(lozinka.length < 5 && lozinka.length!==0){

            greska++;
        }

        var lozinka=$("#lozinka").val();
        var lozPonovljena = $("#ponoviLozinku").val();
        if(lozPonovljena !== lozinka){

            greska++;
        }
        if(postoji != 0){
            greska++;
        }

        if(greska!=0){
 
           alert("Pogrešan unos");
           event.preventDefault();
        }
    })
    
    $("#korimee").blur(function(){
    //console.log("uso u dohvati");

        console.log("korime");
        var korime = $("#korimee").val();
        if(korime.length < 5){
            //document.querySelector('#valkorime').innerHTML = 'jsfgj';
            $("#valkorime").html("[Strana korisnik] Prekratko korisničko ime");
        }
        else{
            $("#valkorime").html("");
        }
        
        $.ajax({
            type: "get",
            url:"../php/registracija_provjera.php?korime="+korime,
            dataType:'JSON',
            success: function (response) {
                //console.log("proso funck");
                if(response==="postoji"){
                    postoji=1;
                    alert("Korisnik postoji u bazi");
                }else{
                    postoji=0;
                }
            }
        });

    });
    

$("#lozinka").blur(function(){
    console.log("loz");
    var lozinka=$("#lozinka").val();
    if(lozinka.length < 5 && lozinka.length!==0){
        $("#valpass").html("[Strana korisnik] Prekratka lozinka");
    }
    else{
        $("#valpass").html("");
    }
});
$("#ponoviLozinku").blur(function(){
    console.log("pon");
    var lozinka=$("#lozinka").val();
    var lozPonovljena = $("#ponoviLozinku").val();
    if(lozPonovljena !== lozinka){
        $("#valpasspon").html("[Strana korisnik] Lozinke se ne poklapaju");
    }
    else{
        $("#valpasspon").html("");
    }
});
//$("#email").blur(function(){
//    console.log("em");
//    var email = $("#email").val();
//    if(!email.match(regmail)){
//        $("#valemail").html("[Strana korisnik] Email je u krivom formatu");
//    }
//    else{
//        $("#valemail").html("");
//    }

});



//$(document).ready(function(){
//    console.log("tu");
//    $("forma-reg").validate({
//        
//        rules: {
//        korime:{
//            required: true,
//            minlenght: 5,
//            maxlenght: 20
//            
//        },
//        email:{
//            email:true,
//            required:true
//        
//            
//        },
//        lozinka:{
//            required:true,
//            minlenght:5,
//            
//        },
//        ponoviLozinku:{
//            
//        }},
//    
//    messages:{
//        korime:{
//            minlenght: "Korisničko ime mora imati barem 5 znakova"
//        },
//        email:{
//            
//        },
//        lozinka:{
//            
//        },
//        ponoviLozinku:{
//            
//        }
//    }
//    });
//});


