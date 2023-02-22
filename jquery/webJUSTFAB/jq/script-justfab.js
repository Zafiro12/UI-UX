$(document).ready(function () {
    // EJERCICIO 1
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#volverarriba").fadeIn();

            // EJERCICIO 5
            if ($("header").find("div").css("position") == "relative") {
                $("header")
                    .find("div")
                    .css("width", "100%")
                    .css("background", "white")
                    .css("position", "fixed")
                    .hide()
                    .slideDown(200);
            }
        } else {
            $("#volverarriba").fadeOut();

            $("header").find("div").css("position", "relative");
        }
    });

    $("#volverarriba").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // EJERCICIO 2
    $("#menu").css("display", "none");

    $("#menu-principal")
        .find("span")
        .click(function () {
            $("#menu").stop(true, false).slideToggle();
            $("#menu>li").children("ul").slideUp();
            $("#menu>li")
                .children()
                .find("i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
        });

    // EJERCICIO 3
    $("#menu>li").click(function (e) {
        e.preventDefault();
        $(this)
            .siblings()
            .find("ul")
            .slideUp()
            .parent()
            .find("i")
            .removeClass("fa-angle-up")
            .addClass("fa-angle-down");

        $(this).find("ul").stop(true, false).slideToggle();

        // EJERCICIO 4
        if ($(this).find("i").hasClass("fa-angle-down")) {
            $(this)
                .find("i")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up");
        } else {
            $(this)
                .find("i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
        }
    });
    
    // EJERCICIO 6
    $(".item").find("img").hover(function () {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-1.jpg"));
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("-1.jpg", ".jpg"));
    })
});
