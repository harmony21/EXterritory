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

    $('.form__mobile-close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper').fadeOut(400);
        $('.form').fadeOut(400);
    })


    //Вызов формы из нижней полосы
    $('.bottom-line__item.order-service').on('click', function (ev){
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

    $('.form__mobile-close').on('click', function (ev){
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

    $('.form__mobile-close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--entrance').fadeOut(400);
        $('.form--entrance').fadeOut(400);
    })

    //Форма "Закажи звонок"
    $('.bottom-line__item.order-call').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--call').fadeIn(400);
        $('.form--call').fadeIn(400);
    });

    $('.form-wrapper--call').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--call').fadeOut(400);
        $('.form--call').fadeOut(400);
    });

    $('.form__close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--call').fadeOut(400);
        $('.form--call').fadeOut(400);
    })

    //Форма "Обратная связь"
    $('.bottom-line__item.feedback').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--feedback').fadeIn(400);
        $('.form--feedback').fadeIn(400);
    });

    $('.form-wrapper--feedback').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--feedback').fadeOut(400);
        $('.form--feedback').fadeOut(400);
    });

    $('.form__close').on('click', function (ev){
        ev.preventDefault();
        $('.form-wrapper--feedback').fadeOut(400);
        $('.form--feedback').fadeOut(400);
    })

})