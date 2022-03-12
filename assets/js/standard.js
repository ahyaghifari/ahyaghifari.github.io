AOS.init();
$(document).ready(function () {

    $('img').bind('contextmenu', function (e) {
    return false;
    });

    function forimages(inputan) {
        return '<div class="items"><img src="./assets/images/projects/'+inputan+'" class="img-projects item" alt=""></div';
    }
    
    // PORTOFOLIO
    $.getJSON('../../data/portofolio.json', function (data) {
        let web = data.portofolio[0];
        let design = data.portofolio[1];
        let draw = data.portofolio[2];
        let trid = data.portofolio[3];
        console.log(trid);
        // WEBSITE
        $.each(web, function (i, data) { 
            $.each(data, function (i, data){
                let listweb = '<div class="items" data-depth="0.2"><img src="./assets/images/projects/'+data.gambar+'" class="img-projects" alt=""><div class="web-capt"><h4>'+data.nama+'</h4><p>'+data.linkshow+'</p></div></div>';
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

    // ABOUT
     $.getJSON('../../data/about.json', function (data) {
         let base = data.about[0];
         let font = data.about[1];
         let libraries = data.about[2];
         
        //  BASE LIST
         $.each(base, function (i, data) {
             const listbase = '<ul><li>' + data + '</li></uL>'
             $('.base-content').append(listbase);
         });

        //  FONT LIST
         $.each(font, function (i, data) {
             $.each(data, function (i, data) {
                 const listfont = '<ul><li><b>'+data.nama+'</b>&nbsp; from <a href="'+data.link+'" target="_blank">'+data.linkshow+'</a> in '+data.for+'</li></ul>';
                 $('.fonts-content').append(listfont);
             });
         });

        //  LIBRARIES
         $.each(libraries, function (i, data) {
             $.each(data, function (i, data) {
                 const listfont = '<ul><li><h5>' + data.nama + '</h5>&nbsp; | <a href="' + data.link + '" target="_blank">' + data.linkshow + '</a></li></ul>';
                 $('.libraries-content').append(listfont);
             });
         });

     });
    
     $('.whatiuse-contents').hide();
    $('.wiu-btn').click(function () {
        $('.whatiuse-contents').slideToggle(200);
    }); 
    
    $('.wii-btn').click(function () {
        $('.whatisthis-contents').slideToggle(200);
    });
  
    // AOS's
    $('.projects-container-content').attr("data-aos", "flip-right");
    $('.wii-btn, .wiu-btn, .whatisthis-contents').attr("data-aos", "zoom-in");
    
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

    $('.home-profile').tilt({
        glare: true,
        maxTilt: 10,
            maxGlare: 0.5
     });

    $('.projects-container-content').tilt({
        glare: true,
        maxTilt: 1.5,
        maxGlare: 0.7
    });

   

});

            

