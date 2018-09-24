$(document).ready(function() {
    if ($(window).width() > 540) {
        $('.sale-order-list-inner-container-item-text-title').mouseenter(function(ev) {
        verItem = $(this).closest('.sale-order-list-inner-container-item-text-title'),
        verItems = verItem.closest('.sale-order-list-inner-container-item').siblings().find('.sale-order-list-inner-container-item-text-title');
        verContent = $(this).closest('.sale-order-list-inner-container-item').next('.order-wrap');
        verContents = verItems.closest('.sale-order-list-inner-container-item').next('.order-wrap');

        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            verItems.removeClass('active');

            verContent.css ({
                'display' : 'block'
            });

            verContents.css ({
                'display' : 'none'
            });


            } else {
                $(this).removeClass('active');

                verContent.css ({
                    'display' : 'none'
                });
            }
            
        })
    }
});
