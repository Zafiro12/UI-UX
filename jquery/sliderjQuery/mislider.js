$(document).ready(function () {
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
