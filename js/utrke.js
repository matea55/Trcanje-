$(document).ready(function () {



    $.ajax({
        type: "get",
        url: "../php/definiranje_drzave_dohvati_drzave.php",

        dataType: "json",
        success: function (response) {

            $('#cmbDrzave').html("");
            for (i in response) {

                $('#cmbDrzave').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');

            }



        }

    });
});


$(document).ready(function () {


    $("#prikažiUtrku").click(function () {






        var drzava = $('#cmbDrzave').find(":selected").text();
        $.ajax({

            type: 'get',
            url: '../php/definiranje_utrke_dohvati_utrke.php?drzava=' + drzava,
            dataType: 'JSON',
            success: function (response) {



                var table = "<table border=1> <tr> <th>  Naziv drzave </th> <th>  Id utrke </th><th>  Vrsta utrke </th> <th>  Rok za prijave </th> </tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.naziv + "</td> <td>" + element.id + "</td><td>" + element.popis + "</td> <td>" + element.rok + "</td></tr>";
                })
                table += "</table>";
                $("#drzaveUtrke").html(table);
                $('#utrkaA').html("");
                for (i in response) {

                    $('#utrkaA').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');

                }

            }
        });


    });

    $("#potvrdiUtrkaA").click(function () {






        var utrka = $('#utrkaA').find(":selected").text();
        var naziv = $("#azurirajUtrku").val();
        var dat = $("#rokA").val();
        var drzava = $('#cmbDrzave').find(":selected").text();
        $.ajax({

            type: 'get',
            url: '../php/definiranje_utrke_azuriraj_utrku.php?utrka=' + utrka + '&naziv=' + naziv + '&dat=' + dat + '&drzava=' + drzava,
            dataType: 'JSON',
            success: function (response) {



                $.ajax({

                    type: 'get',
                    url: '../php/definiranje_utrke_dohvati_utrke.php?drzava=' + drzava,
                    dataType: 'JSON',
                    success: function (response) {



                        var table = "<table border=1> <tr> <th>  Naziv drzave </th> <th>  Id utrke </th><th>  Vrsta utrke </th> <th>  Rok za prijave </th> </tr>̣";
                        $.each(response, function (key, element) {
                            table += "<tr><td>" + element.naziv + "</td> <td>" + element.id + "</td><td>" + element.popis + "</td> <td>" + element.rok + "</td></tr>";
                        })
                        table += "</table>";
                        $("#drzaveUtrke").html(table);
                        $('#utrkaA').html("");
                        for (i in response) {

                            $('#utrkaA').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');

                        }

                    }
                });

            }
        });


    });


});

$(document).ready(function () {


    $("#dodajNovuUtrku").click(function () {


        var naziv = $('#novaUtrka').val();
        var rok = $("#rok").val();
        var drzava = $('#cmbDrzave').find(":selected").text();
        $.ajax({

            type: 'get',
            url: '../php/definiranje_utrke_dodaj_utrku.php?naziv=' + naziv + "&rok=" + rok + "&drzava=" + drzava,
            dataType: 'JSON',
            success: function (ok) {

                if (ok == "ok") {
                    $.ajax({

                        type: 'get',
                        url: '../php/definiranje_utrke_dohvati_utrke.php?drzava=' + drzava,
                        dataType: 'JSON',
                        success: function (response) {



                            var table = "<table border=1> <tr> <th>  Naziv drzave </th> <th>  Id utrke </th><th>  Vrsta utrke </th> <th>  Rok za prijave </th> </tr>̣";
                            $.each(response, function (key, element) {
                                table += "<tr><td>" + element.naziv + "</td> <td>" + element.id + "</td><td>" + element.popis + "</td> <td>" + element.rok + "</td></tr>";
                            })
                            table += "</table>";
                            $("#drzaveUtrke").html(table);
                            $('#utrkaA').html("");
                            for (i in response) {

                            $('#utrkaA').append('<option value = ' + response[i].id + '>' + response[i].id + '</option>');

                        }

                        }
                    });


                }
            }
        });


    });


});