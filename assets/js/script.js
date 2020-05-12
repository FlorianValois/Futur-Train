$('.js-btn-main-menu').on('click', function () {
  alert('Menu');
});

/* Effet sur scroll */
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  /* Background header */
  if (scroll >= 100) {
    console.log('scroll');
    $("header").addClass("js-scroll-down");
  } else {
    console.log('top scroll');
    $("header").removeClass("js-scroll-down");
  }
});
