$(document).ready(function () {


    $.ajax({
        type: "get",
        url: "../php/dnevnik_dohvati_dnevnik.php",

        dataType: "json",
        success: function (response) {
            console.log("tuD");
            var table = "<table border=1> <tr> <th> Radnja dnevnika </th> <th> Vrijeme radnje</th> <th> Korisnik radnje</th> <th> Uloga korisnika</th> <th> Upit</th> <th> Radnja</th></tr>̣";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.opis_radnje + "</td><td>" + element.vrijeme_radnje + "</td><td>" + element.korisnicko_ime + "</td><td>" + element.naziv + "</td><td>" + element.upit + "</td><td>" + element.radnja + "</td></tr>";
            })
            table += "</table>";

            $("#dnevnikPokazi").html(table);
        }
    });

});

$(document).ready(function () {




    $.ajax({
        type: 'get',
        url: '../php/dnevnik_dovuci_korisnike.php',

        dataType: 'JSON',
        success: function (data) {
            $('#korisnik').html("");
            for (i in data) {

                $('#korisnik').append('<option value = ' + data[i].korime + '>' + data[i].korime + '</option>');
            }
        }
    });


});

$(document).ready(function () {


    $("#korisnikSort").click(function () {


        var odabran = $('#korisnik').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/dnevnik_pretrazivanje_po_korisnicima.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {

                var table = "<table border=1> <tr> <th> Radnja dnevnika </th> <th> Vrijeme radnje</th> <th> Korisnik radnje</th> <th> Uloga korisnika</th> <th> Upit</th> <th> Radnja</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.opis_radnje + "</td><td>" + element.vrijeme_radnje + "</td><td>" + element.korisnicko_ime + "</td><td>" + element.naziv + "</td><td>" + element.upit + "</td><td>" + element.radnja + "</td></tr>";
                })
                table += "</table>";

                $("#dnevnikPokazi").html(table);
            }
        });


    });


});

$(document).ready(function () {

    $.ajax({
        type: 'get',
        url: '../php/dnevnik_dovuci_zapise.php',

        dataType: 'JSON',
        success: function (data) {
            $('#zapis').html("");
            for (i in data) {

                $('#zapis').append('<option value = ' + data[i].zapis + '>' + data[i].zapis + '</option>');
            }
        }
    });


});


$(document).ready(function () {


    $("#zapisSort").click(function () {


        var odabran = $('#zapis').find(":selected").text();
        $.ajax({
            type: 'get',
            url: '../php/dnevnik_pretrazivanje_po_radnji.php?odabran=' + odabran,

            dataType: 'JSON',
            success: function (response) {

                var table = "<table border=1> <tr> <th> Radnja dnevnika </th> <th> Vrijeme radnje</th> <th> Korisnik radnje</th> <th> Uloga korisnika</th> <th> Upit</th> <th> Radnja</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.opis_radnje + "</td><td>" + element.vrijeme_radnje + "</td><td>" + element.korisnicko_ime + "</td><td>" + element.naziv + "</td><td>" + element.upit + "</td><td>" + element.radnja + "</td></tr>";
                })
                table += "</table>";

                $("#dnevnikPokazi").html(table);
            }
        });


    });


});



$(document).ready(function () {
    $("#vrati").click(function () {


        $.ajax({
            type: "get",
            url: "../php/dnevnik_dohvati_dnevnik.php",

            dataType: "json",
            success: function (response) {

                var table = "<table border=1> <tr> <th> Radnja dnevnika </th> <th> Vrijeme radnje</th> <th> Korisnik radnje</th> <th> Uloga korisnika</th> <th> Upit</th> <th> Radnja</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.opis_radnje + "</td><td>" + element.vrijeme_radnje + "</td><td>" + element.korisnicko_ime + "</td><td>" + element.naziv + "</td><td>" + element.upit + "</td><td>" + element.radnja + "</td></tr>";
                })
                table += "</table>";

                $("#dnevnikPokazi").html(table);
            }
        });
    });

});

$(document).ready(function () {
    $("#vrijemePotvrdi").click(function () {

        var od = $("#od").val();
        var doV = $("#do").val();

        ;

        $.ajax({
            type: "get",
            url: "../php/dnevnik_dohvati_vrijeme.php?od=" + od + "&doV=" + doV,

            dataType: "json",
            success: function (response) {

                var table = "<table border=1> <tr> <th> Radnja dnevnika </th> <th> Vrijeme radnje</th> <th> Korisnik radnje</th> <th> Uloga korisnika</th> <th> Upit</th> <th> Radnja</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.opis_radnje + "</td><td>" + element.vrijeme_radnje + "</td><td>" + element.korisnicko_ime + "</td><td>" + element.naziv + "</td><td>" + element.upit + "</td><td>" + element.radnja + "</td></tr>";
                })
                table += "</table>";

                $("#dnevnikPokazi").html(table);
            }
        });
    });

});
