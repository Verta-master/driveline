//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
});

// Sticky header on scroll 
$(document).ready(function(){
  $(".header__bottom").sticky({
    topSpacing: 0
  });
});
