$(document).ready(function() {
    $('.return__arrow').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verContent = element.parent('.return__intro').siblings('.return__wrap'), 
        maxHeight = verContent.find('.return__content').outerHeight(true);

        console.log(verContent);
        if (!element.hasClass('active')) {
            element.addClass('active');

            verContent.css ({
                'height' : maxHeight
            });

        } else {
            element.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

    })
})