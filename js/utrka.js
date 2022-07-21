$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "../php/prijava_na_utrku_dohvati_validne_utrke.php",

        dataType: "json",
        success: function (response) {
            console.log("ok");


            var table = "<table border=1> <tr> <th> Id utrke </th> <th> Vrsta utrke</th> <th> Završetak prijave</th><th> Drzava u kojoj se održava</th></tr>̣";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.id + "</td><td>" + element.vrsta + "</td><td>" + element.prijava + "</td><td>" + element.drzava + "</td></tr>";
            })
            table += "</table>";

            $("#validne").html(table);

            $('#biramUtrku').html("");

            for (i in response) {

                $('#biramUtrku').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
            }
        }

    });



    $.ajax({
        type: "get",
        url: "../php/prijava_na_utrku_pokazi_buduce_etape.php",

        dataType: "json",
        success: function (res) {


            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th></tr>̣";
            $.each(res, function (key, element) {
                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td></tr>";
            })
            table += "</table>";

            $("#mojeBuduceEtape").html(table);

            $('#odustaniEtapa').html("");

            for (i in res) {

                $('#odustaniEtapa').append('<option value = ' + res[i].id + '>' + res[i].id + '</option>');
            }
        }

    });


    $.ajax({
        type: "get",
        url: "../php/prijava_na_utrku_pokazi_prosle_etape.php",

        dataType: "json",
        success: function (res) {


            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th><th> Mjesto na etapi</th><th> Osvojeni bodovi</th><th> Odustao/završio</th><th> Vrijeme završetka u minutama</th></tr>̣";
            $.each(res, function (key, element) {
                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td><td>" + element.mjesto + "</td><td>" + element.bodovi + "</td><td>" + element.status + "</td><td>" + element.minute + "</td>";
            })
            table += "</table>";

            $("#mojeProsleEtape").html(table);

//            $('#biramEtapu').html("");
//
//            for (i in response) {
//
//                $('#biramEtapu').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
//            }
        }

    });


    $.ajax({
        type: "get",
        url: "../php/prijava_na_utrku_dohvati_validne_etape.php",

        dataType: "json",
        success: function (response) {



            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th></tr>̣";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td></tr>";
            })
            table += "</table>";

            $("#dostupneEtape").html(table);

            $('#biramEtapu').html("");

            for (i in response) {

                $('#biramEtapu').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
            }
        }

    });


    $.ajax({
        type: "get",
        url: "../php/prijava_na_utrku_prikazi_moje_prijave.php",

        dataType: "json",
        success: function (res) {



            var table = "<table border=1> <tr> <th> Id utrke </th> <th> Vrsta utrke</th> <th> Završetak prijave</th><th> Drzava u kojoj se održava</th></tr>̣";
            $.each(res, function (key, element) {
                table += "<tr><td>" + element.id + "</td><td>" + element.vrsta + "</td><td>" + element.prijava + "</td><td>" + element.drzava + "</td></tr>";
            })
            table += "</table>";

            $("#moje_utrke").html(table);
            $('#neisteknute').html("");
            for (i in res) {

                $('#neisteknute').append('<option value = ' + res[i].id + '>' + res[i].id + '</option>');
            }

                       
        }

    });

    $("#prijaviMe").click(function () {


        var odabran = $('#biramUtrku').find(":selected").text();
        var godina = $('#rodenje').val();
        var slika = $('#slika').val();
        $.ajax({
            type: 'get',
            url: '../php/prijava_na_utrku_prijavi_me.php?odabran=' + odabran + "&godina=" + godina,

            dataType: 'JSON',
            success: function (response) {
                if (response == "ok") {
                    $.ajax({
                        type: "get",
                        url: "../php/prijava_na_utrku_prikazi_moje_prijave.php",

                        dataType: "json",
                        success: function (res) {



                            var table = "<table border=1> <tr> <th> Id utrke </th> <th> Vrsta utrke</th> <th> Završetak prijave</th><th> Drzava u kojoj se održava</th></tr>̣";
                            $.each(res, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.vrsta + "</td><td>" + element.prijava + "</td><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";

                            $("#moje_utrke").html(table);
                            $('#neisteknute').html("");
                            for (i in res) {

                                $('#neisteknute').append('<option value = ' + res[i].id + '>' + res[i].id + '</option>');
                            }


//                            $('#biramUtrku').html("");
//
//                            for (i in response) {
//
//                                $('#biramUtrku').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
//                            }
                        }

                    });
                }



            }
        });


    });
    
    
    $("#azuriraj").click(function () {


        var odabran = $('#neisteknute').find(":selected").text();
        var godina = $('#rodenjeUp').val();
        var slika = $('#slikaUp').val();
        $.ajax({
            type: 'get',
            url: '../php/prijava_na_utrku_azuriraj.php?odabran=' + odabran + "&godina=" + godina,

            dataType: 'JSON',
            success: function (response) {
                if (response == "ok") {
                    alert("Uspješno ažurirana prijava")
                }



            }
        });


    });

    $("#etapaPrijava").click(function () {


        var odabran = $('#biramEtapu').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/prijava_na_utrku_prijavi_me_na_etapu.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {
                if (response == "ok") {
                    $.ajax({
                        type: "get",
                        url: "../php/prijava_na_utrku_pokazi_buduce_etape.php",

                        dataType: "json",
                        success: function (res) {



                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th></tr>̣";
                            $.each(res, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";

                            $("#mojeBuduceEtape").html(table);
                            $('#odustaniEtapa').html("");

                            for (i in res) {

                                $('#odustaniEtapa').append('<option value = ' + res[i].id + '>' + res[i].id + '</option>');
                            }

//                            $('#biramEtapu').html("");
//
//                            for (i in response) {
//
//                                $('#biramEtapu').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
//                            }
                        }

                    });
                }



            }
        });


    });

    $("#etapaOdustani").click(function () {


        var odabran = $('#odustaniEtapa').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/prijava_na_utrku_odustajem.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {
                if (response == "ok") {
                    $.ajax({
                        type: "get",
                        url: "../php/prijava_na_utrku_pokazi_buduce_etape.php",

                        dataType: "json",
                        success: function (res) {



                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th></tr>̣";
                            $.each(res, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";

                            $("#mojeBuduceEtape").html(table);

//                            $('#biramEtapu').html("");
//
//                            for (i in response) {
//
//                                $('#biramEtapu').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
//                            }
                        }

                    });
                }



            }
        });


    });

    $("#azuriraj").click(function () {


        var odabran = $('#odustaniEtapa').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/prijava_na_utrku_odustajem.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {
                if (response == "ok") {
                    $.ajax({
                        type: "get",
                        url: "../php/prijava_na_utrku_pokazi_buduce_etape.php",

                        dataType: "json",
                        success: function (res) {



                            var table = "<table border=1> <tr> <th> Id etape </th> <th> Datum i vrijeme etape</th> <th> Duljina etape</th><th> Id utrke za etapu</th><th> Država u kojoj se održava</th></tr>̣";
                            $.each(res, function (key, element) {
                                table += "<tr><td>" + element.id + "</td><td>" + element.vr + "</td><td>" + element.duljina + "</td><td>" + element.utrka + "</td><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";

                            $("#mojeBuduceEtape").html(table);
                            $('#odustaniEtapa').html("");
                            for (i in res) {

                                $('#odustaniEtapa').append('<option value = ' + res[i].id + '>' + res[i].id + '</option>');
                            }

//                            $('#biramEtapu').html("");
//
//                            for (i in response) {
//
//                                $('#biramEtapu').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');
//                            }
                        }

                    });
                }



            }
        });


    });



});

