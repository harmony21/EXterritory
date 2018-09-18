$(document).ready(function() {
    $('.sale-order-list-title').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.sale-order-item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.sale-order-item__wrap'), 
        verContents = verItems.find('.sale-order-item__wrap'),
        maxHeight = verItem.find('.sale-order-item__more').outerHeight(true);
 

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
            verContent.css ({
                'height' : 0
            });

            verItem.removeClass('active');
        }

    })
})