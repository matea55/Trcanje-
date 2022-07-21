$(document).ready(function () {

    $.ajax({
        type: 'get',
        url: '../php/statistika_mod_ukupno.php',

        dataType: 'JSON',
        success: function (response) {

            $.each(response, function (key, element) {

                $("#ukupnoEtape").html(element.broj);
            })


        }
    });


    



        $.ajax({
            type: 'get',
            url: '../php/statistika_mod_odustali.php',

            dataType: 'JSON',
            success: function (response) {
                var table = "<table border=1> <tr> <th>  Id etape </th><th>  Odustali </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.id + "</td><td>" + element.broj + "</td></tr>";
                    $("#ukupno").html(element.ukupno);
                })
                table += "</table>";

                $("#nezavrsene").html(table);


            }
        });


    
    
    $.ajax({
            type: 'get',
            url: '../php/statistika_mod_zavrsili.php',

            dataType: 'JSON',
            success: function (response) {
                var table = "<table border=1> <tr> <th>  Id etape </th><th>  Završili </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.id + "</td><td>" + element.broj + "</td></tr>";
                    $("#ukupno").html(element.ukupno);
                })
                table += "</table>";

                $("#zavrsene").html(table);


            }
        });
}); 
 