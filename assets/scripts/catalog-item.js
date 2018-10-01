$(document).ready(function() {
    if ($(window).width() > 1000) {
           $('.catalog-navigation__item').on('click', function (ev) {
            items = $(this).siblings(),
            verContent = $(this).next('.catalog-way-hidden-wrap'), 
            verContents = verContent.siblings('.catalog-way-hidden-wrap'),
            
            Height = verContent.find('.catalog-way-hidden-list').outerHeight(true);

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');

                items.removeClass('active');

                verContent.css ({
                    'height' : Height
                });
                
                verContents.css ({
                    'height' : 0
                });

                
            } 
            else {
                $(this).removeClass('active');

                verContent.css ({
                    'height' : 0
                });
            }   
        })

    }
 
})