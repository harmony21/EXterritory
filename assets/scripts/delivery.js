$(document).ready(function() {
    $('.delivery__arrow').on('click', function (ev){
        ev.preventDefault();
        var content = $('.delivery__wrap'),
        maxHeight = $('.delivery__content').outerHeight(true);

        if (!$('.delivery__title').hasClass('active')) {
            $('.delivery__title').addClass('active');

            content.css ({
                'height' : maxHeight
            });

        } else {
           $('.delivery__title').removeClass('active');

            content.css ({
                'height' : 0
            });
        }

    })




    $('.delivery__choice-item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.delivery__choice-item'),
        verContent = verItem.find('.delivery__choice-wrap'), 
        Height = verItem.find('.delivery__choice-content').outerHeight(true);

        if (!verItem.hasClass('active')) {
            verItem.addClass('active');

            verContent.css ({
                'height' : Height
            });

        } else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }
    })
})
