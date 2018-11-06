$(document).ready(function() {
    if ($(window).width() > 540) {
        //Профиль
        $('.profile').mouseenter(function(e) {
        e.preventDefault();

        if (!$('.links').hasClass('active')) {
            $('.links').addClass('active');
            $('.shadow').css('display', 'block');
            $('.location').css('z-index', 50);
            }
            else {
                $('.links').removeClass('active');
                $('.shadow').css('display', 'none');
                $('.location').css('z-index', 60);
            }
        })

        $('.shadow').mouseenter(function(e) {
        e.preventDefault();

        if (!$('.links').hasClass('active')) {
            $('.links').addClass('active');
            $('.shadow').css('display', 'block');
            $('.location').css('z-index', 50);
            }
            else {
                $('.links').removeClass('active');
                $('.shadow').css('display', 'none');
                $('.location').css('z-index', 60);
            }
        })

        $('.shadow').click(function(e) {
            $('.links').removeClass('active');
            $('.shadow').css('display', 'none');
            $('.location').css('z-index', 60);
        })
    }

    //Ваш регион
    $('.location').click(function(e) {
        e.preventDefault();
        if(!$('.location').hasClass('active')) {
            $('.location').addClass('active');
            $('.shadow').css('display', 'block');
            $('.location__choice').css('display', 'none');
            $('.links').css('z-index', 50);
        }
        else {
            $('.location').removeClass('active');
            $('.shadow').css('display', 'none');
            $('.location__choice').css('display', 'block');
            $('.links').css('z-index', 60);
        }
    })
    $('.shadow').click(function(e) {
        $('.location').removeClass('active');
        $('.shadow').css('display', 'none');
        $('.location__choice').css('display', 'block');
        $('.links').css('z-index', 60);
    })
});

