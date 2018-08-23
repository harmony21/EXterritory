$('.options__item').mouseenter(function() {
    if(!$(this).hasClass('active')) {
        $(this).addClass('active');
    }
    else {
        $(this).removeClass('active');
    }
})