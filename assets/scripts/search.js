$('.search__icon').click(function() {
    if(!$('.search').hasClass('active')) {
        $('.search').addClass('active');
    }
    else {
        $('.search').removeClass('active');
        
    }
})


//действия при скроллинге
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 450 ) {
        $('.header__bottom').addClass('fixed');
        $('.menu__item_wrap').addClass('fixed');
    }   
    if( scrolled <= 450 ) {     
        $('.header__bottom').removeClass('fixed');
        $('.menu__item_wrap').removeClass('fixed');
    }

});