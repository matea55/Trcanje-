$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "../php/moja_statistika_dovuci_drzave.php",

        dataType: "json",
        success: function (response) {
            




            $('#biramDrzavu').html("");

            for (i in response) {

                $('#biramDrzavu').append('<option value = ' + response[i].naziv + '>' + response[i].naziv + '</option>');
            }
        }

    });
    
    $("#prikaziSveZavrsene").click(function () {


        
        
        $.ajax({
            type: 'get',
            url: '../php/moja_statistika_dovuci_drzave.php',

            dataType: 'JSON',
            success: function (response) {       
                var table = "<table border=1> <tr> <th> Naziv države </th> <th> Broj završenih etapa</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.naziv + "</td><td>" + element.zavrsio + "</td></tr>";
                })
                table += "</table>";

                $("#statReg").html(table);

            }
        });


    });
    
    $("#prikaziPoDrzavi").click(function () {


        
        var odabran = $('#biramDrzavu').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/moja_statistika_prikazi_prema_drzavi.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {       
                var table = "<table border=1> <tr> <th> Naziv države </th> <th> Broj završenih etapa</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.naziv + "</td><td>" + element.zavrsio + "</td></tr>";
                })
                table += "</table>";

                $("#statReg").html(table);

            }
        });


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
});
