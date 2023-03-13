$(document).ready(function () {
    $("input, textarea").blur(function () {
        $(this).siblings(".letras").html("");
        if ($(this).val() == "") {
            $(this).next().html("Este campo no puede estar vacío").css("color", "red");
        } else {
            $(this).next().html("");
        }
    });
                

    $("textarea").keyup(function (e) {
        $(this).siblings(".letras").html("Has escrito " + e.target.value.length + " letras de 100");
    });

    $("button").click(function () {
        $("parent").fadeOut();
    });
    $( "#date" ).datepicker();
});