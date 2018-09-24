$(document).ready(function() {
    if ($(window).width() > 1000) {
           $('.label').on('click', function (ev) {
            verContent = $(this).next('.catalog-way-hidden-wrap'), 
            Height = verContent.find('.catalog-way-hidden-list').outerHeight(true);

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');

                verContent.css ({
                    'height' : Height
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