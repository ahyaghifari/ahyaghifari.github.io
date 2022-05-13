$(document).ready(function () {

    // IMAGES
    $('#projects').on('contextmenu', 'img', function (e) {
        return false;
    });

    // PROJECTS NAV
    $('.projects-nav').click(function () {
        $('.projects-nav').removeClass('active');
        $(this).addClass('active');
        var projectselect = $(this).html().toLowerCase().replaceAll(' ', '');

    });
    

    // COMPONENT PROJECTS
    function forwebsite(gambar, link, linkshow) {
        return '<div class="group overflow-hidden object-contain relative w-6/12 md:w-4/12  bg-white grayscale hover:grayscale-0 duration-500"><a href="'+link+'" target="_blank"><img src="'+gambar+'" alt="'+linkshow+'"><p class="absolute md:text-3xl inset-y-1/2 inset-x-1/3 bg-black h-fit text-maroon font-montserrat font-bold opacity-0 w-0 group-hover:opacity-100 group-hover:w-fit transition-all duration-500 select-none">'+linkshow+'</p></a></div>';
    }

    // PORTOFOLIO
    $.getJSON('assets/portofolio.json', function (data) {
        let website = data.portofolio[0].website;
        let design = data.portofolio[1].design;

            $.each(website, function (i, data) { 
                $('#website-cont').append(forwebsite(data.gambar, data.link, data.linkshow));
            });
            $.each(design, function (i, data) { 
                $('#design-cont').append('<img src="'+ data.gambar +'" class="w-40 object-cover m-3 shadow-sm grayscale hover:grayscale-0 duration-500 shadow-maroon sm:w-52 md:w-64 lg:w-72">');
            });
    });

    // YEAR
    var d = new Date();
    $('#year').html(d.getFullYear());


    // ONSCROLL ANIMATION
    var proheader = $('#projects-header');
    var pronav = $('#projects-nav');
    var webtitle = $('#website-title');
    var design = $('#design-cont');
    var contact = $('#contactme');
    var w = $(window);

    function animate() {
        var w_height = w.height();
        var w_top_p = w.scrollTop();
        var w_bottom_p = (w_top_p + w_height);

        // FUNCTION LOOPER
        function lupis(collect, classname) {
            let each = $.each(collect, function () {
                var p = $(this);
                var proheader_height = p.outerHeight();
                var proheader_t = p.offset().top;
                var proheader_b = (proheader_t + proheader_height);

                if (p) {
                    
                    if (proheader_t <= w_bottom_p) {
                        p.addClass(classname);
                    } else {
                        p.removeClass(classname);
                    }
                }
            });
            return each;
        }

        lupis(contact, "reveal");
        lupis(design, "reveal");
        lupis(webtitle, "reveal");
        lupis(proheader, "reveal");
        lupis(pronav, "reveal");
    }
    w.on('scroll resize', animate);
    w.trigger('scroll');
    
});