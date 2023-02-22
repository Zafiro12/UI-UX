$(document).ready(function () {
  // EJERCICIO 1
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#volverarriba").fadeIn();
    } else {
      $("#volverarriba").fadeOut();
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
      $("#menu").stop(true).slideToggle();
    });

  // EJERCICIO 3
  $("#menu>li")
    .click(function (e) {
      e.preventDefault();
      $("#menu>li").find("ul").slideUp();
      $(this).find("ul").stop(true).slideToggle();

      // TODO: EJERCICIO 4
      $(this)
        .find("span")
        .toggle(
          function () {
            $(this).stop(true).animate({ rotate: "0deg" }, "slow");
          },
          function () {
            $(this).stop(true).animate({ rotate: "-90deg" }, "slow");
          }
        );
    })
    .find("span")
    .animate({ rotate: "-90deg" }, "slow");
});
