$(document).ready(function() {
  // toggle
  $(".nav_icon").click(function(e) {
    e.preventDefault();
    $(".nav_links").slideToggle(1700);
    $(".nav_links").toggleClass("show");
  });
  // scroll
  $(".nav_links a").click(function(e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html , body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 72
        },
        1500
      );
    $(".nav_links").css("opacity", ".1");
    setTimeout(function() {
      $(".nav_links").css("display", "none");
    }, 1400);
  });
});
