$(document).ready(function(){
	var carousel = $("#carousel");
    carousel.owlCarousel({
        nav: true,
        responsive: {
            0:{
                items:1
            },
            320:{
                items:2
            },
            600:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#js-prev').click(function () {
        carousel.trigger('owl.prev');
        return false;
    });

    $('#js-next').click(function () {
        carousel.trigger('owl.next');
        return false;
    });
});

$(document).ready(function(){
	var carousel1 = $("#carousel1");
    carousel1.owlCarousel({
        responsive: {
            0:{
                items:1
            },
            320:{
                items:2
            },
            600:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#js-prev1').click(function () {
        carousel1.trigger('owl.prev');
        return false;
    });

    $('#js-next1').click(function () {
        carousel1.trigger('owl.next');
        return false;
    });
});

$(document).ready(function(){
	var carousel2 = $("#carousel2");
    carousel2.owlCarousel({
        responsive: {
            0:{
                items:1
            },
            320:{
                items:2
            },
            600:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#js-prev2').click(function () {
        carousel.trigger('owl.prev');
        return false;
    });

    $('#js-next2').click(function () {
        carousel2.trigger('owl.next');
        return false;
    });
});


$(document).ready(function(){
	var carousel3 = $("#carousel3");
    carousel3.owlCarousel({
        responsive: {
            0:{
                items:1
            },
            320:{
                items:2
            },
            600:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#js-prev3').click(function () {
        carousel3.trigger('owl.prev');
        return false;
    });

    $('#js-next3').click(function () {
        carousel3.trigger('owl.next');
        return false;
    });
});



