$(document).ready(function () {



    $.ajax({
        type: "get",
        url: "../php/definiranje_drzave_dohvati_drzave.php",

        dataType: "json",
        success: function (response) {


            var table = "<table border=1> <tr> <th>  Naziv države </th></tr>";
            $.each(response, function (key, element) {
                table += "<tr><td>" + element.drzava + "</td></tr>";
            })
            table += "</table>";

            $("#pokaziDrzave").html(table);

            $('#cmbDrzave').html("");
            $('#drzaveDodijeli').html("");
            for (i in response) {

                $('#cmbDrzave').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');
                $('#drzaveDodijeli').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');
            }
            
            

        }

    });
    $.ajax({
        type: "get",
        url: "../php/definiranje_drzave_dohvati_moderatore.php",

        dataType: "json",
        success: function (response) {
            
            
            for (i in response) {

                $('#moderatori').append('<option value = ' + response[i].korime + '>' + response[i].korime + '</option>');
                
            }
                        

        }

    });



});

$(document).ready(function () {
    

    $("#potvrdiDodjelu").click(function () {
        

        var mod = $('#moderatori').find(":selected").text();
        var drz = $('#drzaveDodijeli').find(":selected").text();
        $.ajax({
        type: 'get',
        url: '../php/definiranje_drzave_dodijeli_moderatora_drzavi.php?mod=' + mod + "&drz=" + drz,

        dataType: 'JSON',
        success: function (response) {
            if(response=="dodano"){
                alert("Uspješno dodan moderator");
                
            }
        }
    });
        

    });


});

$(document).ready(function () {


    $("#potvrdiDrzavu").click(function () {




        var drzava = $('#unesiDrzavu').val();
        $.ajax({

            type: 'get',
            url: '../php/definiranje_drzave_unesi_drzavu.php?drzava=' + drzava,
            dataType: 'JSON',
            success: function (ok) {
                
                if (ok == "ok") {


                    $.ajax({
                        type: "get",
                        url: "../php/definiranje_drzave_dohvati_drzave.php",
                        dataType: "json",
                        success: function (response) {

                            var table = "<table border=1> <tr> <th>  Naziv drzave </th></tr>̣";
                            $.each(response, function (key, element) {
                                table += "<tr><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";
                            $("#pokaziDrzave").html(table);
                            $('#cmbDrzave').html("");
                            $('#drzaveDodijeli').html("");
                            for (i in response) {

                                $('#cmbDrzave').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');
                                $('#drzaveDodijeli').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');

                            }
                        }

                    });
                }
            }
        });


    });


});

$(document).ready(function () {


    $("#potvrdiAzurDrzave").click(function () {
        var odabranaDrzava = $('#cmbDrzave').find(":selected").text();




        var unosDrzava = $('#azurirajDrzavu').val();
        $.ajax({

            type: 'get',
            url: '../php/definiranje_drzave_azuriraj_drzavu.php?drzava=' + unosDrzava + "&odabranaDrzava=" + odabranaDrzava,
            dataType: 'JSON',
            success: function (okAzur) {
                
                if (okAzur == "ok") {


                    $.ajax({
                        type: "get",
                        url: "../php/definiranje_drzave_dohvati_drzave.php",
                        dataType: "json",
                        success: function (response) {

                            var table = "<table border=1> <tr> <th>  Naziv drzave </th></tr>̣";
                            $.each(response, function (key, element) {
                                table += "<tr><td>" + element.drzava + "</td></tr>";
                            })
                            table += "</table>";
                            $("#pokaziDrzave").html(table);
                            $('#cmbDrzave').html("");
                            $('#drzaveDodijeli').html("");
                            for (i in response) {

                                $('#cmbDrzave').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');
                                $('#drzaveDodijeli').append('<option value = ' + response[i].drzava + '>' + response[i].drzava + '</option>');

                            }
                        }

                    });
                }
            }
        });


    });


});