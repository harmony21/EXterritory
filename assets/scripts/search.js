$('.search').click(function() {
    if(!$('.search').hasClass('active')) {
        $('.search').addClass('active');
        $('.search-input').focus();
    }
    else {
        $('.search').removeClass('active');
        
    }
})


//действия при скроллинге
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();

    if ($(window).width() < 540) {
        if (scrolled > 450 ) {
            $('.header__bottom').addClass('fixed');
            $('.menu__item_wrap').addClass('fixed');
        }   
        if (scrolled <= 450 ) {     
            $('.header__bottom').removeClass('fixed');
            $('.menu__item_wrap').removeClass('fixed');
        }
    }
    else {
        if (scrolled > 107 ) {
            $('.header__bottom').addClass('fixed');
            $('.menu__item_wrap').addClass('fixed');
        }   
        if (scrolled <= 107 ) {     
            $('.header__bottom').removeClass('fixed');
            $('.menu__item_wrap').removeClass('fixed');
        }
    }
});


