$(document).ready(function() {
    if ($(window).width() > 540) {
           $('.label-info').on('click', function (ev) {

            var element = $(ev.target),
            verItem = element.closest('.label-info'),
            verItems = verItem.siblings('.label-info'),
            verContent = element.next('.label-inside'), 
            Height = verContent.find('.label-inside__content').outerHeight(true);

            if (!verItem.hasClass('active')) {
                verItem.addClass('active');
                verItem.addClass('current');
                verItems.removeClass('current');
                verItems.removeClass('active');

                verContent.css ({
                    'height' : Height
                });
            } 
            else {
                verItem.removeClass('active');
                verItem.removeClass('current');

                verContent.css ({
                    'height' : 0
                });
            }   
        })

    }
 
})


$(document).ready(function() {

    $('.label-inside__item').on('click', function (ev) {
       
        var item =  $(this).closest('.label-inside').prev('.label-info'),
        items = item.siblings();
        console.log(items);

        item.addClass('current');
        items.removeClass('current');
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

        })
    }
})

