$(document).ready(function() {
    $('.label-info').on('click', function (ev) {
       
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.prev('.label-info'),
        verInput = element.prev('.hide-check'),
        verContent = element.next('.label-inside'), 
        Height = verContent.find('.label-inside__content').outerHeight(true);
        
        if (!verInput.attr('checked')) {
            verInput.attr('checked', 'checked');

            verContent.css ({
                'height' : Height
            });
        } 
        else {
            verInput.removeAttr('checked');

            verContent.css ({
                'height' : 0
            });
        }
    })
})
