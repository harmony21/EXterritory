$(document).ready(function() {
    $('.product-item-detail-mobile-item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verContent = element.next('.product-item-detail-mobile-wrap-hide-content'), 
        maxHeight = verContent.find('.product-item-detail-mobile-wrap-hide-content-info').outerHeight(true);

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