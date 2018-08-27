$(document).ready(function() {
    $('.label-info').on('click', function (ev) {
       
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.label-info'),
        verContent = element.next('.label-inside'), 
        Height = verContent.find('.label-inside__content').outerHeight(true);
        
        if (!verItem.hasClass('active')) {
            verItem.addClass('active');

            verContent.css ({
                'height' : Height
            });
        } 
        else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }
    })
})
