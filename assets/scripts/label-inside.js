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


$(document).ready(function() {
    if ($(window).width() <= 540) {
        $('.inside-label').on('click', function (ev) {
       
            ev.preventDefault();
            var inputID = $(this).prev().attr('id'),
            inputs = $(this).siblings('label'),
            sections = $(this).siblings('section');

            if (!$(this).hasClass('active')) {

                inputs.removeClass('active');
                sections.css('display', 'none');
                $(this).addClass('active');
                $('#content-'+inputID).css('display', 'block');
            }
            else {

            }

        })
    }
})

