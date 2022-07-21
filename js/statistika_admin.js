$(document).ready(function () {
//    $.ajax({
//        type: 'get',
//        url: '../php/statistika_admin_vrijeme_silazno.php',
//
//        dataType: 'JSON',
//        success: function (response) {
//
//            var xValues = [];
//            var yValues = [];
//            function addData(data) {
//                $.each(response, function (key, element) {
//                    xValues+=element.datum;
//                    yValues+=element.broj
//                                           
//                })
//                
//
//            }
//
//            new Chart("myChart", {
//                type: "line",
//                data: {
//                    labels: xValues,
//                    datasets: [{
//                            fill: false,
//                            lineTension: 0,
//                            backgroundColor: "rgba(0,0,255,1.0)",
//                            borderColor: "rgba(0,0,255,0.1)",
//                            data: yValues
//                        }]
//                },
//                options: {
//                    legend: {display: false},
//                    scales: {
//                        yAxes: [{ticks: {min: 6, max: 16}}],
//                    }
//                }
//            });
//
//
//        }
//    });

//var xValues = [50,60,70,80,90,100,110,120,130,140,150];
//var yValues = [7,8,8,9,9,9,10,11,14,14,15];
//
//new Chart("myChart", {
//  type: "line",
//  data: {
//    labels: xValues,
//    datasets: [{
//      fill: false,
//      lineTension: 0,
//      backgroundColor: "rgba(0,0,255,1.0)",
//      borderColor: "rgba(0,0,255,0.1)",
//      data: yValues
//    }]
//  },
//  options: {
//    legend: {display: false},
//    scales: {
//      yAxes: [{ticks: {min: 6, max:16}}],
//    }
//  }
//});




    //
    $.ajax({
        type: 'get',
        url: '../php/statistika_admin_ukupno.php',

        dataType: 'JSON',
        success: function (response) {

            $.each(response, function (key, element) {

                $("#ukupno").html(element.broj);
            })


        }
    });


    $("#vrSiz").click(function () {



        $.ajax({
            type: 'get',
            url: '../php/statistika_admin_vrijeme_silazno.php',

            dataType: 'JSON',
            success: function (response) {
                var table = "<table border=1> <tr> <th>  Vrijeme </th><th>  Ukupno zapisa u tom vremenu </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.vrijeme + "</td><td>" + element.broj + "</td></tr>";
                    $("#ukupno").html(element.ukupno);
                })
                table += "</table>";

                $("#izabranaStatistika").html(table);


            }
        });


    });
    $("#vrUz").click(function () {



        $.ajax({
            type: 'get',
            url: '../php/statistika_admin_vrijeme_uzlazno.php',
            dataType: 'JSON',
            success: function (response) {
                var table = "<table border=1> <tr> <th>  Vrijeme </th><th>  Ukupno zapisa u tom vremenu </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.vrijeme + "</td><td>" + element.broj + "</td></tr>";

                })
                table += "</table>";

                $("#izabranaStatistika").html(table);
            }
        });


    });
    $("#radnjaUz").click(function () {



        $.ajax({
            type: 'get',
            url: '../php/statistika_admin_korisnik_uzlazno.php',
            dataType: 'JSON',
            success: function (response) {

                var table = "<table border=1> <tr> <th>  Korisničko ime </th><th>  Ukupno zapisa korisnika </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.ime + "</td><td>" + element.broj + "</td></tr>";

                })
                table += "</table>";

                $("#izabranaStatistika").html(table);



            }
        });


    });
    $("#radnjaSiz").click(function () {



        $.ajax({
            type: 'get',
            url: '../php/statistika_admin_korisnik_silazno.php',

            dataType: 'JSON',
            success: function (response) {
                var table = "<table border=1> <tr> <th>  Korisničko ime </th><th>  Ukupno zapisa korisnika </th></tr>̣";
                $.each(response, function (key, element) {
                    table += "<tr><td>" + element.ime + "</td><td>" + element.broj + "</td></tr>";

                })
                table += "</table>";

                $("#izabranaStatistika").html(table);
            }
        });


    });


});
