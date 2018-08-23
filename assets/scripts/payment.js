$(document).ready(function() {
    $('.payment__item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.payment__item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.payment__wrap'), 
        verContents = verItems.find('.payment__wrap'),
        maxHeight = verItem.find('.payment__content').outerHeight(true),
        image = verItem.find('.payment__icon');
 

        if (!verItem.hasClass('active')) {
            verItems.removeClass('active');
            verItem.addClass('active');
            image.addClass('active');
            var images = $('.payment__icon').not(image);
            images.removeClass('active');

            verContents.css ({
                'height' : 0
            });

            verContent.css ({
                'height' : maxHeight
            });

        } else {
            verItem.removeClass('active');
            image.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

    })
})