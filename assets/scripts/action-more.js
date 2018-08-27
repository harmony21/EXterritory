$(document).ready(function() {
    $('.link-way').on('click', function (ev) {
    
        ev.preventDefault();

        var actionMore = $(this).next(), 
        Height = actionMore.find('.action-more__content').outerHeight(true);
        
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');

            actionMore.css ({'height' : Height});
        } 
        else {
            $(this).removeClass('active');

            actionMore.css ({'height' : 0});
        }
    })
})