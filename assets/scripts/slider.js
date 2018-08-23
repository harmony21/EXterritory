$(document).ready(function(){
  $('.slider__slider').bxSlider();
});
$(document).ready(function(){
  $('.gallery-slider').bxSlider();
});


var slider = $('.slider__slider').bxSlider({
    mode: 'horizontal'
});
var slider1 = $('.gallery-slider').bxSlider({
    mode: 'fade',
    speed: 1000
});


$('.arrow-right-main-slide').click(function(){
  slider.goToNextSlide();
});

$('.arrow-left-main-slide').click(function(){
  slider.goToPrevSlide();
});







