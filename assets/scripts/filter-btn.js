$(document).ready(function() {
    $('.block-filter__sort').on('click', function (ev){
        ev.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });

    $('.compare__link').on('click', function (ev){
        ev.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
        else {
            $(this).siblings().addClass('active');
            $(this).removeClass('active');
        }
    });

    $('.basket-top__type').on('click', function (ev){
        ev.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
        else {
            $(this).siblings().addClass('active');
            $(this).removeClass('active');
        }
    });

    $('.basket-bottom__link').on('click', function (ev){
        ev.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
        else {
            $(this).siblings().addClass('active');
            $(this).removeClass('active');
        }
    });

     $('.print').on('click', function (ev){
        ev.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
        else {
            $(this).siblings().addClass('active');
            $(this).removeClass('active');
        }
    });
})