//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
});

$('.header__more').click(function() {
  $('.header__address').slideToggle();
  $('.header__email').slideToggle();
  $(this).toggleClass('header__more--rotate');
});

// Sticky header on scroll 
$(document).ready(function(){
  $(".header__bottom").sticky({
    topSpacing: 0
  });
});
