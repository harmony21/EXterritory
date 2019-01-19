$(document).ready(function() {
    var lightSlider = $("#lightSlider").lightSlider({
        item: 3,
        responsive : [
            {
                breakpoint:860,
                settings: {
                    item:2,
                    slideMove:1,
                  }
            },
            {
                breakpoint: 540,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    }); 
    $('.arrow-left.compare').click(function(){
        lightSlider.goToPrevSlide(); 
    });
    $('.arrow-right.compare').click(function(){
        lightSlider.goToNextSlide(); 
    });

    $("#lightSlider-mobile").lightSlider({
        item: 1,
    }); 

});