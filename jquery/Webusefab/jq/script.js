$(document).ready(function () {
    $("#menu-principal>span").click(function () {
        $("#menu").animate({ left: "0" }, 200);
        $("#desplazable").animate({ left: "20rem" }, 200);
        $("#oscuro").fadeIn(200);
    });

    $("#oscuro").click(function () {
        $("#menu").animate({ left: "-20rem" }, 200);
        $("#desplazable").animate({ left: "0" }, 200);
        $("#oscuro").fadeOut(200);
    });

    $(".item").hover(
        function () {
            $(this).find("a>span.comprar").stop().fadeIn(200);
            $(this).find("a>span.comprar").css("display", "flex");
        },
        function () {
            $(this).find("a>span.comprar").stop().fadeOut(200);
        }
    );

    $("#slider").css("width", "100%");
    $.as({
        id: "slider",
        folder: "img",
        images: ["zapato1.jpg", "zapato1-1.jpg", "zapato2-1.jpg", "zapato2.jpg","zapato1-1.jpg", "zapato1.jpg", "zapato2-1.jpg", "zapato2.jpg"],
        imgWidth: 500,
        speed: 2000,
      });
});
