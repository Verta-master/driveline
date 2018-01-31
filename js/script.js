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

//Scroll for header
$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() + 150;
  if (scrollPos > 150) {
    $('.header__bottom').addClass('header__bottom--shadow');
  } else {
    $('.header__bottom').removeClass('header__bottom--shadow');
  }
}
