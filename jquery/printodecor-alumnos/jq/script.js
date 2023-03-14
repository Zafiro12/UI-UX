$(document).ready(function () {
    $("#hamburger")
        .click(function (e) {
            e.preventDefault();
            $(this).children().eq(1).css("overflow", "visible");
            if ($("#menu-toggle").is(":visible")) {
                $("#menu-toggle").stop(true, true).slideUp();
                $(".line-ham").stop(true, true).animate({ backgroundColor: "black" }, 500);
                $(this).children().eq(1).animate({ width: "1.37rem" }, 500);
            } else {
                $("#menu-toggle").stop(true, true).slideDown();
                $(".line-ham").stop(true, true).animate({ backgroundColor: "red" }, 500);
                $(this).children().eq(1).animate({ width: "1.87rem" }, 500);
            }
        })
        .css("cursor", "pointer");

    $(window)
        .scroll(function () {
            if ($("#menu-toggle").is(":visible")) {
                $("#menu-toggle").stop().slideUp();
                $(".line-ham").animate({ backgroundColor: "black" }, 500);
                $("#hamburger")
                    .children()
                    .eq(1)
                    .animate({ width: "1.37rem" }, 500);
            }

            if ($(window).scrollTop() > 100) {
                $("#go-up").stop().fadeIn();
                $("header#home-header")
                    .css("position", "fixed")
                    .css("width", "100%")
                    .css("z-index", "99999999")
                    .animate(
                        { backgroundColor: "rgba(255,255,255,0.9)" },
                        2000
                    );
            } else {
                $("#go-up").stop().fadeOut();
                $("header#home-header")
                    .css("background-color", "transparent")
                    .css("position", "relative");
            }

            $("#go-up").click(function () {
                $("html, body").stop().animate({ scrollTop: 0 }, 500);
            });
        })
        .resize(function () {
            $("#menu-toggle").stop(true, true);
        });

    $("#menu-toggle > li:nth-child(3) > a").click(function () {
        if ($("#menu-toggle > li:nth-child(3) > ul").is(":visible")) {
            $("#menu-toggle > li:nth-child(3) > ul")
                .stop()
                .animate({ left: "-50vw" }, 500);
            $("#menu-toggle > li:nth-child(3) > span").html("+");
            $("#menu-toggle > li:nth-child(3) > ul").slideUp();
        } else {
            $("#menu-toggle > li:nth-child(3) > ul").stop().slideDown();
            $("#menu-toggle > li:nth-child(3) > span").html("-");
            $("#menu-toggle > li:nth-child(3) > ul").animate(
                { left: "0" },
                500
            );
        }
    });

    $("#barra-social").fadeIn();
    $("#chat").fadeIn();
    $("#header-chat1").click(function () {
        $("#window-chat").stop().slideDown();
        $("#header-chat1").css("display", "none");
        $("#header-chat2").css("display", "flex");
    });

    $("#header-chat2>span").click(function () {
        $("#window-chat").stop().slideUp();
        $("#header-chat1").css("display", "flex");
        $("#header-chat2").css("display", "none");
    });

    $(".producto").hover(
        function () {
            $(this).children("a").stop().slideDown().css("display", "flex");
        },
        function () {
            $(this).children("a").stop().slideUp();
        }
    );

        $("#window-chat input").blur(function () {
            if ($(this).val() == "") {
                $(this).next().css("visibility", "visible");
            } else {
                $(this).next().css("visibility", "hidden");
            }
        });

    var SliderModule = (function () {
        var pb = {};

        pb.elslider = $("#slider");
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper>li"),
        };

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        pb.init = function () {
            SliderInit();

            $("#control-buttons").html(
                "<li class='active'><img src='" +
                    pb.items.panels.eq(0).find("img").attr("src") +
                    "' /></li>"
            );

            for (var i = 1; i < lengthSlider; i++) {
                $("#control-buttons").append(
                    "<li><img src='" +
                        pb.items.panels.eq(i).find("img").attr("src") +
                        "' /></li>"
                );
            }

            $("#control-buttons li").click(function () {
                if (currentSlider !== $(this).index()) {
                    cambiarSlider($(this).index());
                }
            });

            $(".arrow-left, .arrow-right").click(function () {
                if ($(this).hasClass("arrow-right")) {
                    cambiarSlider(nextSlider);
                } else {
                    cambiarSlider(currentSlider - 1);
                }
            });
        };

        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, 3000);

            $("#slider").hover(
                function () {
                    clearInterval(SliderInterval);
                    $(".arrow-left, .arrow-right").fadeIn("fast");
                },
                function () {
                    clearInterval(SliderInterval);
                    $(".arrow-left, .arrow-right").fadeOut("fast");
                    SliderInterval = setInterval(pb.startSlider, 3000);
                }
            );
        };

        var cambiarSlider = function (indice) {
            clearInterval(SliderInterval);
            var panels = pb.items.panels;
            var controls = $("#control-buttons li");

            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            controls.removeClass("active").eq(indice).addClass("active");

            panels.eq(currentSlider).fadeOut("slow");
            panels.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        };

        pb.startSlider = function () {
            var panels = pb.items.panels;
            var controls = $("#control-buttons li");

            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controls.removeClass("active").eq(nextSlider).addClass("active");

            panels.eq(currentSlider).fadeOut("slow");
            panels.eq(nextSlider).fadeIn("slow");

            currentSlider = nextSlider;
            nextSlider += 1;
        };

        return pb;
    })();

    SliderModule.init();
});
