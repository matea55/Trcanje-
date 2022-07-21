$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "../php/etape_koje_vodim_dovuci_drzave.php",

        dataType: "json",
        success: function (response) {
            console.log("ok");


            $('#DrzaveModerator').html("");

            for (i in response) {

                $('#DrzaveModerator').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');
            }
        }

    });



});

$(document).ready(function () {


    $("#prikaziUtrke").click(function () {


        var odabran = $('#DrzaveModerator').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_prikazi_utrke.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {

                var table = "<table border=1> <tr> <th> Id utrke </th> <th> Vrsta utrke</th> <th> Zavrsetak prijave</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.id + "</td><td>" + element.vrsta + "</td><td>" + element.prijava + "</td></tr>";
                })
                table += "</table>";

                $("#utrkeMod").html(table);

                $('#utrkeModerator').html("");

                for (i in response) {

                    $('#utrkeModerator').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
                }
            }
        });


    });

    $("#prikaziEtape").click(function () {


        var etapa = $('#utrkeModerator').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_prikazi_etape.php?etapa=' + etapa,

            dataType: 'JSON',
            success: function (response) {

                var table = "<table border=1> <tr> <th> Id etape </th> <th> Početak</th> <th> Duljina u km</th><th> Status</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.id + "</td><td>" + element.datum + "</td><td>" + element.duljina + "</td><td>" + element.status + "</td></tr>";
                })
                table += "</table>";

                $("#etapeMod").html(table);

                $.ajax({
                    type: 'get',
                    url: '../php/etape_koje_vodim_dovuci_zakljucane.php?etapa=' + etapa,

                    dataType: 'JSON',
                    success: function (s) {

                        $('#etapeCmb').html("");

                        for (i in s) {

                            $('#etapeCmb').append('<option value = ' + s[i].id + '>' + s[i].id + '</option>');
                        }


                    }
                });




            }

        });

        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_prikazi_korisnike_na_utrci.php?etapa=' + etapa,

            dataType: 'JSON',
            success: function (f) {
                var table = "<table border=1> <tr> <th> Id etape </th> <th> Korisničko ime</th> <th> Mjesto</th><th> Bodovi</th><th> Završio/odustao</th><th> Vrijeme u minutama</th></tr>̣";
                $.each(f, function (key, element) {
                    table += "<tr><td>" + element.ime + "</td><td>" + element.id + "</td><td>" + element.mjesto + "</td><td>" + element.bodovi + "</td><td>" + element.status + "</td><td>" + element.minute + "</td></tr>";
                })
                table += "</table>";

                $("#korisnici").html(table);



            }
        });
        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_dovuci_korisnike.php?etapa=' + etapa,

            dataType: 'JSON',
            success: function (s) {
                $('#sudjeluju').html("");

                for (i in s) {

                    $('#sudjeluju').append('<option value = ' + s[i].id + '>' + s[i].id + '</option>');
                }





            }
        });
        $("#sudjeluju").change(function () {

            var kor = $('#sudjeluju').find(":selected").text();
            $.ajax({
                type: 'get',
                url: '../php/etape_koje_vodim_dovuci_etape_di_korisnik_sudjeluje.php?kor=' + kor + "&utrka=" + etapa,

                dataType: 'JSON',
                success: function (s) {
                    $('#korEtapa').html("");

                    for (i in s) {

                        $('#korEtapa').append('<option value = ' + s[i].id + '>' + s[i].id + '</option>');
                    }





                }
            });
            $("#dodaj").click(function () {
            var kor = $('#sudjeluju').find(":selected").text();
            var su = $('#korEtapa').find(":selected").text();
            var mjesto = $('#mjesto').val();
            var bodovi = $('#bodovi').val();
            var minute = $('#minute').val();
            var status = $('#status').find(":selected").text();

            $.ajax({
                type: 'get',
                url: '../php/etape_koje_vodim_dodaj_sudjeluje.php?kor=' + kor + "&su=" + su + "&mjesto=" + mjesto + "&bodovi=" + bodovi + "&status=" + status + "&minute=" + minute,

                dataType: 'JSON',
                success: function (s) {
                    $.ajax({
                        type: 'get',
                        url: '../php/etape_koje_vodim_prikazi_korisnike_na_utrci.php?etapa=' + etapa,

                        dataType: 'JSON',
                        success: function (f) {
                            
                            
                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Korisničko ime</th> <th> Mjesto</th><th> Bodovi</th><th> Završio/odustao</th><th> Vrijeme u minutama</th></tr>̣";
                            $.each(f, function (key, element) {
                                table += "<tr><td>" + element.ime + "</td><td>" + element.id + "</td><td>" + element.mjesto + "</td><td>" + element.bodovi + "</td><td>" + element.status + "</td><td>" + element.minute + "</td></tr>";
                            })
                            table += "</table>";

                            $("#korisnici").html(table);



                        
                    }
                    });



                }
            });
            });
        });



    });


    $("#dodajNovuEtapu").click(function () {


        var km = $('#novaEtapa').val();
        var vrijeme = "";
        vrijeme = $('#rokEtapa').val();
        var utrka = $('#utrkeModerator').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_dodaj_novu_etapu.php?km=' + km + "&vrijeme=" + vrijeme + "&utrka=" + utrka,

            dataType: 'JSON',
            success: function (ok) {
                if (ok == "ok") {
                    var etapa = $('#utrkeModerator').find(":selected").text();


                    $.ajax({
                        type: 'get',
                        url: '../php/etape_koje_vodim_prikazi_etape.php?etapa=' + etapa,

                        dataType: 'JSON',
                        success: function (response) {

                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Početak</th> <th> Duljina u km</th><th> Status</th></tr>̣";
                            $.each(response, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.datum + "</td><td>" + element.duljina + "</td><td>" + element.status + "</td></tr>";
                            })
                            table += "</table>";

                            $("#etapeMod").html(table);


                        }
                    });
                    
                    $.ajax({
                                type: 'get',
                                url: '../php/etape_koje_vodim_dovuci_zakljucane.php?etapa=' + etapa,

                                dataType: 'JSON',
                                success: function (s) {

                                    $('#etapeCmb').html("");

                                    for (i in s) {

                                        $('#etapeCmb').append('<option value = ' + s[i].id + '>' + s[i].id + '</option>');
                                    }


                                }
                            });


                }


            }
        });






    });

    $("#zakljucaj").click(function () {


        var etapa = $('#etapeCmb').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/etape_koje_vodim_zakljucaj.php?etapa=' + etapa,

            dataType: 'JSON',
            success: function (ok) {
                if (ok == "ok") {
                    var etapa = $('#utrkeModerator').find(":selected").text();
                    $.ajax({
                        type: 'get',
                        url: '../php/etape_koje_vodim_prikazi_etape.php?etapa=' + etapa,

                        dataType: 'JSON',
                        success: function (response) {

                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Početak</th> <th> Duljina u km</th><th> Status</th></tr>̣";
                            $.each(response, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.datum + "</td><td>" + element.duljina + "</td><td>" + element.status + "</td></tr>";
                            })
                            table += "</table>";

                            $("#etapeMod").html(table);

                            $.ajax({
                                type: 'get',
                                url: '../php/etape_koje_vodim_dovuci_zakljucane.php?etapa=' + etapa,

                                dataType: 'JSON',
                                success: function (s) {

                                    $('#etapeCmb').html("");

                                    for (i in s) {

                                        $('#etapeCmb').append('<option value = ' + s[i].id + '>' + s[i].id + '</option>');
                                    }


                                }
                            });


                        }

                    });
                }


            }
        });




    });


});


