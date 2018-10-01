$(document).ready(function() {
    //Раскрывающиеся списки в мобильной версии
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


    //Выделение выбранных элементов
    //Цвет
    $('.product-item-scu-item-color').on('click', function (ev){
        var element = $(ev.target),
        elements = element.closest('.product-item-scu-item-color-container').siblings().find('.product-item-scu-item-color');
        
        if (!element.hasClass('selected')) {
            element.addClass('selected');
            elements.removeClass('selected');
        } else {
            element.removeClass('selected');
        }
    })

    //Тип покрытия
    $('.product-item-scu-item-text').on('click', function (ev) {
        var element = $(ev.target).closest('.product-item-scu-item-text-block');
        elements = element.closest('.product-item-scu-item-text-container').siblings().find('.product-item-scu-item-text-block');
        if (!element.hasClass('selected')) {
            element.addClass('selected');
            elements.removeClass('selected');
        } else {
            element.removeClass('selected');
        }
    })
})