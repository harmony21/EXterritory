$(document).ready(function() {
    $('.vacancy__item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.vacancy__item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.vacancy__wrap'), 
        verContents = verItems.find('.vacancy__wrap'),
        maxHeight = verItem.find('.vacancy__content').outerHeight(true);

        if (!verItem.hasClass('active')) {
            verItems.removeClass('active');
            verItem.addClass('active');

            verContents.css ({
                'height' : 0
            });

            verContent.css ({
                'height' : maxHeight
            });

        } else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

    })
})
