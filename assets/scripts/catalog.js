$(document).ready(function() {
    $('.catalog-item__show-all').on('click', function (ev){
        ev.preventDefault();

        if ($(this).text() == 'Раскрыть весь список') {
            $(this).text('Скрыть весь список');
        }
        else {
            $(this).text('Раскрыть весь список');
        }

        var element = $(ev.target),
        verContent = element.parent('.catalog-item__desc').find('.catalog-hidden'),
        maxHeight = verContent.find('.catalog-hidden-list').outerHeight(true);

        if (!element.hasClass('active')) {
            element.addClass('active');
            verContent.css ({'height' : maxHeight});

        } else {
            element.removeClass('active');
            verContent.css ({'height' : 0});
        }

    })
})