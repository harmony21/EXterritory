$( document ).ready(function() {
    $('.menu__laptop').click(function() {
        $('.menu__laptop-wrap').css('display', 'block');
    })
    $('.menu__laptop-close').click(function() {
        $('.menu__laptop-wrap').css('display', 'none');
    })


    var hamburger = $('#hamburger-icon');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        return false;
    });

});