$('.options__item').mouseenter(function() {
    if ($(window).width() > 540) {
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    }
    
})