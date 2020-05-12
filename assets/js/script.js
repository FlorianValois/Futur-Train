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
