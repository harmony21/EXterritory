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
    if( scrolled > 107 ) {
        $('.header__bottom').addClass('fixed');
    }   
    if( scrolled <= 107 ) {     
        $('.header__bottom').removeClass('fixed');
    }

});