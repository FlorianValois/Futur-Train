$('.js-btn-main-menu').on('click', function () {
  alert('Menu');
});

/* Effet sur scroll */

var scroll = $(window).scrollTop();
/* Background header */
if (scroll >= 100) {
  $("header").addClass("js-scroll-down");
} else {
  $("header").removeClass("js-scroll-down");
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  /* Background header */
  if (scroll >= 100) {
    $("header").addClass("js-scroll-down");
  } else {
    $("header").removeClass("js-scroll-down");
  }
});

/* Selector Statut */
$('#selector-statut-choice').on('click', function () {
  $('#selector-statut-list-choice').addClass('open');
});

$('#selector-statut-list-choice ul li').on('click', function () {
  var choicedatalink = $(this).attr('data-link');
  var choicetext = $(this).text();
  $('#selector-statut-choice strong').text(choicetext);
  $('#link-selector-statut').attr('href', '/decouvrir-' + choicedatalink);
  $('#selector-statut-list-choice').removeClass('open');
});

/* Carousel "Métiers" */
$(".owl-carousel").owlCarousel({
  margin: 10,
  nav: true,
  navText: ['<img src="/assets/img/arrow/arrow-left-white.svg" alt="flèche gauche blanche" />', '<img src="/assets/img/arrow/arrow-right-white.svg" alt="flèche droite blanche" />'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    640: {
      items: 3
    },
    990: {
      items: 4
    }
  }
});

/* Count to 0 at xx */
$('#ferroviaire').appear();

$(document.body).on('appear', '#ferroviaire', function () {
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.round(now));
      }
    });
  });
  $('.count-dec').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.round(now * 100) / 100);
      }
    });
  });
});
