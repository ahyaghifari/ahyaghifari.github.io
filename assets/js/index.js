$(document).ready(function () {

    $('.home-profile').attr("data-depth", "0.5");
    $('.home-image').attr("data-depth", "0.3");

    var homeretro = $('#home').get(0);
    var parallaxInstance = new Parallax(homeretro); 

     $('.owl-carousel').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
         autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
    // PORTOFOLIO
    $.getJSON('../../data/portofolio.json', function (data) {
        let web = data.portofolio[0];
        let design = data.portofolio[1];
        let draw = data.portofolio[2];
        let trid = data.portofolio[3];

        console.log(design);

         function forimages(inputan) {
        return '<div class="items"><img src="./assets/images/projects/'+inputan+'" class="img-projects item" alt=""></div';
    }
    

        // WEBSITE
        $.each(web, function (i, data) { 
            $.each(data, function (i, data){
                let listweb = '<div class="items"><img src="./assets/images/projects/'+data.gambar+'" class="img-projects" alt=""><div class="web-capt"><h4>'+data.nama+'</h4><a href="'+data.link+'">'+data.linkshow+'</a></div></div>';
                $('.website').append(listweb);
            });
        });
        // DESIGN
        $.each(design, function (i, data) { 
            $.each(data, function (i, data) {
                $('.design').append(forimages(data.gambar));
            });
        });
        // DRAW
        $.each(draw, function (i, data) { 
            $.each(data, function (i, data) {
                $('.draw').append(forimages(data.gambar));
            });
        });
        // 3D
        $.each(trid, function (i, data) { 
            $.each(data, function (i, data) {
                $('.trid').append(forimages(data.gambar));
            });
        });
    });

    // TILT
    $('.projects-content').tilt({
        glare: true,
        maxTilt: 1.5,
        maxGlare: 0.7
    });

    $('img').bind('contextmenu', function (e) {
        return false;
    });
});