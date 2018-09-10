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


    $('.delivery__name').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.delivery__choice-item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.delivery__choice-wrap'), 
        verContents = verItems.find('.delivery__choice-wrap'),
        Height = verItem.find('.delivery__choice-content').outerHeight(true);
        console.log(verContents);

        if (!verItem.hasClass('active')) {
            verItem.addClass('active');
            verItems.removeClass('active');

            verContents.css ({
                'height' : 0
            });

            verContent.css ({
                'height' : Height
            });

            

        } else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

        $('.delivery__car-icon').on('click', function (e) {
            var closeItems = $(this).closest('.delivery__choice-item').siblings().find('.delivery__car-icon');
            var farItems = $(this).closest('.delivery__car').siblings().find('.delivery__car-icon');
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                closeItems.removeClass('active');
                farItems.removeClass('active');
            }
        })
    })
})
