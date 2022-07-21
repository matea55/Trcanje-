

//$(document).ready(function(){
//function dohvati() {
//        
//        var korime = $("#korimee").val();
//        
//        $.ajax({
//            type: "get",
//            url:"../php/registracija_provjera.php?korime="+korime,           
//            success: function (response) {
//                alert(response);
//                var sadrzaj = "";
//
//                if (response === "Korisničko ime ok") {
//                     document.getElementById("forma-reg").dispatchEvent( new Event( 'submit' ) );                
//                    
//                } 
//                
//            }
//        });
//
//    }
//
//    
//      
//    });
//    $('#forma-reg').on('submit', function (e) {
//        e.preventDefault();
//        dohvati();
//
//});


//
//$(document).ready(function(){
//function dohvati() {
//    //console.log("uso u dohvati");
//        
//        var korime = $("#korimee").val();
//        
//        $.ajax({
//            type: "get",
//            url:"../php/registracija_provjera.php?korime="+korime,
//            dataType:'JSON',
//            success: function (response) {
//                //console.log("proso funck");
//                if(response==="postoji"){
//                    alert("Korisnik postoji u bazi");
//                }
//                else{
//                    document.getElementById("forma-reg").dispatchEvent( new Event( 'submit' ) );
//                }
//                
//                
//            }
//        });
//
//    }
//
//    $('#forma-reg').on('submit', function (e) {
//        e.preventDefault();
//        dohvati();
//      
//    });
//    
//
//});


//$(document).ready(function(){
//function dohvati() {
//        
//        var korime = $("#korimee").val();
//        
//        $.ajax({
//            type: "get",
//            url:"../php/registracija_provjera.php?korime="+korime,           
//            onSuccess: successFunc,
//            onFailure: failureFunc
//        });
//
//    }
//    
//    function successFunc(response) {
//            if (200 == response.status) {
//               alert("Call is success");
//            }
//            function failureFunc(response) {
//            alert("Call is failed" );
//         }
//
//    }
//    
//      $('#forma-reg').on('submit', function (e) {
//        e.preventDefault();
//        dohvati();
//
//});
//    });
//    



