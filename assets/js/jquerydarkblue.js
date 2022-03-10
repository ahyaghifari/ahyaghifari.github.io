$(document).ready(function () {
    
        $('img').bind('contextmenu', function (e) {
        return false;
    }); 
    

    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        nav: false,
        loop: true,
        autoWidth: true,
        URLhashListener: true,
        startPosition: 'URLHash',
     
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            },
            1000: {
                items: 8
            }
        }
    });     



});