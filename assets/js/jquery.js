$(document).ready(function () {

      // IMAGE CAN'T DOWNLOAD
    $('img').bind('contextmenu', function (e) {
        return false;
    }); 


    // PARALLAX
            var scene = $('.about-body').get(0);
            var parallaxInstance = new Parallax(scene, {
                hoverOnly: true,
                pointerEvents: true,
            });
    

    // OWL
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        items: 40,
        nav: false,
        autoWidth: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
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