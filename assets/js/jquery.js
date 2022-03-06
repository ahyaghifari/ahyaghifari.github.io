$(document).ready(function () {

//     $(window).on("load", function () {
//         $('.load-wrapper').addClass('ended');
//     })

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
    var owl = $('.owl-carousel');
    owl.owlCarousel({
    stagePadding: 50,
        loop: true,
    items: 40,
    nav: false,
  
    autoWidth: true,
    URLhashListener:true,
    startPosition: 'URLHash',
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
    })


             const scrollContainer = document.querySelector(".projects-body");

            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
            
  
         
});
