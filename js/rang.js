$(document).ready(function () {

    $.ajax({
        type: 'get',
        url: '../php/rang_lista_prikazi_sve.php',

        dataType: 'JSON',
        success: function (response) {
            var table = "<table border=1> <tr> <th> Korisničko ime </th> <th> Broj završenih etapa</th></tr>̣";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.naziv + "</td><td>" + element.zavrsio + "</td></tr>";
            })
            table += "</table>";

            $("#rang").html(table);

        }
    });

    $("#vratiPocetni").click(function () {


        $.ajax({
        type: 'get',
        url: '../php/rang_lista_prikazi_sve.php',

        dataType: 'JSON',
        success: function (response) {
            var table = "<table border=1> <tr> <th> Korisničko ime </th> <th> Broj završenih etapa</th></tr>̣";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.naziv + "</td><td>" + element.zavrsio + "</td></tr>";
            })
            table += "</table>";

            $("#rang").html(table);

        }
    });
        });


    

    $("#vrijemeFilter").click(function () {

        var odRang = $("#odRang").val();
        var doRang = $("#doRang").val();

        ;

        $.ajax({
            type: "get",
            url: "../php/rang_lista_dohvati_vrijeme.php?odRang=" + odRang + "&doRang=" + doRang,

            dataType: "json",
            success: function (response) {
                var table = "<table border=1> <tr> <th> Korisničko ime </th> <th> Broj završenih etapa</th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.naziv + "</td><td>" + element.zavrsio + "</td></tr>";
                })
                table += "</table>";

                $("#rang").html(table);

            }
        });
    });

});


