$(document).ready(function() {
    //Форма "Закажи замер"
    $('.slider__btn').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper').fadeIn(400);
        $('.form').fadeIn(400);
    });

    $('.form-wrapper').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper').fadeOut(400);
        $('.form').fadeOut(400);
    });

    $('.form__close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper').fadeOut(400);
        $('.form').fadeOut(400);
    })
    //Форма "Зарегистрироваться"
    $('.links__link.registration').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--registration').fadeIn(400);
        $('.form--registration').fadeIn(400);
    });
    $('.links__inside-item.registration').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--registration').fadeIn(400);
        $('.form--registration').fadeIn(400);
    });

    $('.form-wrapper--registration').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--registration').fadeOut(400);
        $('.form--registration').fadeOut(400);
    });

    $('.form__close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--registration').fadeOut(400);
        $('.form--registration').fadeOut(400);
    })
    //Форма "Войти в личный кабинет"
    $('.links__link.entrance').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--entrance').fadeIn(400);
        $('.form--entrance').fadeIn(400);
    });
    $('.links__inside-item.entrance').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--entrance').fadeIn(400);
        $('.form--entrance').fadeIn(400);
    });

    $('.form-wrapper--entrance').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--entrance').fadeOut(400);
        $('.form--entrance').fadeOut(400);
    });

    $('.form__close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--entrance').fadeOut(400);
        $('.form--entrance').fadeOut(400);
    })


    //Подробная информация о материале
    $('.hide-info-more').on('click', function (ev){
        ev.preventDefault();
        $('.hide-wrapper').fadeIn(400);
        $('.product-item-scu-item-text-hide-info-more').fadeIn(400);
    });

    $('.hide-wrapper').on('click', function (ev){
        ev.preventDefault();
        $('.hide-wrapper').fadeOut(400);
        $('.product-item-scu-item-text-hide-info-more').fadeOut(400);
    });

})