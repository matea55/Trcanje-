$(document).ready(function () {


    $.ajax({
        type: "get",
        url: "../php/korisnicki_racuni_dohvati_blokirane_racune.php",

        dataType: "json",
        success: function (response) {


            var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
            })
            table += "</table>";

            $("#racuniO").html(table);
            $('#odblokiraj').html("");
            for (i in response) {

                $('#odblokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
            }
        }
    });


    $("#odblok").click(function () {


        var kor = $('#odblokiraj').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/korisnicki_racuni_odblokiraj.php?kor=' + kor,

            dataType: 'JSON',
            success: function (r) {
                $.ajax({
                    type: "get",
                    url: "../php/korisnicki_racuni_dohvati_neblokirane_racune.php",

                    dataType: "json",
                    success: function (response) {



                        var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
                        $.each(response, function (key, element) {
                            table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
                        })
                        table += "</table>";




                        $("#racuniB").html(table);
                        $('#blokiraj').html("");
                        for (i in response) {

                            $('#blokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
                        }
                    }
                });
                $.ajax({
                    type: "get",
                    url: "../php/korisnicki_racuni_dohvati_blokirane_racune.php",

                    dataType: "json",
                    success: function (response) {


                        var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
                        $.each(response, function (key, element) {
                            table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
                        })
                        table += "</table>";

                        $("#racuniO").html(table);
                        $('#odblokiraj').html("");
                        for (i in response) {

                            $('#odblokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
                        }
                    }
                });

            }
        });


    });

    $("#blok").click(function () {


        var kor = $('#blokiraj').find(":selected").text();

        $.ajax({
            type: 'get',
            url: '../php/korisnicki_racuni_blokiraj.php?kor=' + kor,

            dataType: 'JSON',
            success: function (r) {
                $.ajax({
                    type: "get",
                    url: "../php/korisnicki_racuni_dohvati_neblokirane_racune.php",

                    dataType: "json",
                    success: function (response) {



                        var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
                        $.each(response, function (key, element) {
                            table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
                        })
                        table += "</table>";




                        $("#racuniB").html(table);
                        $('#blokiraj').html("");
                        for (i in response) {

                            $('#blokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
                        }
                    }
                });

            }
        });
        $.ajax({
            type: "get",
            url: "../php/korisnicki_racuni_dohvati_blokirane_racune.php",

            dataType: "json",
            success: function (response) {


                var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
                })
                table += "</table>";

                $("#racuniO").html(table);
                $('#odblokiraj').html("");
                for (i in response) {

                    $('#odblokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
                }
            }
        });


    });



    $.ajax({
        type: "get",
        url: "../php/korisnicki_racuni_dohvati_neblokirane_racune.php",

        dataType: "json",
        success: function (response) {



            var table = "<table border=1> <tr> <th> Id korisnika </th> <th> Korisnicko ime</th></tr>";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.id_korisnik + "</td><td>" + element.korime + "</td></tr>";
            })
            table += "</table>";




            $("#racuniB").html(table);
            $('#blokiraj').html("");
            for (i in response) {

                $('#blokiraj').append('<option value = ' + response[i].id_korisnik + '>' + response[i].id_korisnik + '</option>');
            }
        }
    });

});


