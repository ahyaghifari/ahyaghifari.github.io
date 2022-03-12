$(document).ready(function () {
   
    $.getJSON('../../data/data.json', function (data) {
        let website = data.website;


        $.each(website, function (i, data) {
            const theContent = '<div class="carousel-cell"><img src="assets/images/projects/' + data.gambar + '" alt="" class="img-web"><div class="img-capt">' + data.title + '</h2><a href="#website">ThisWebsite</a></div></div>';

            $(".main-carousel").append(theContent);
            
        });
    });

    $('img').bind('contextmenu', function (e) {
        return false;
    });


    var homeretro = $('.home-retro').get(0);
    var parallaxInstance = new Parallax(homeretro);



    $('.owl-carousel').owlCarousel({
        nav: false,
        loop: true,
        
        autoWidth: true,
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

