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
        return '<div class="website-comp overflow-hidden my-5 aspect-4/3 h-32 sm:h-48 grayscale hover:grayscale-0 duration-500 md:h-56"><img src="'+gambar+'" alt="'+linkshow+'"><a href="'+link+'" class="text-white font-raleway font-semibold">'+linkshow+'</a></div>';
    }

    // PORTOFOLIO
    $.getJSON('assets/portofolio.json', function (data) {
        let website = data.portofolio[0].website;
        let design = data.portofolio[1].design;
        let trid = data.portofolio[2].trid;

            $.each(website, function (i, data) { 
                $('#website-cont').append(forwebsite(data.gambar, data.link, data.linkshow));
            });
            $.each(design, function (i, data) { 
                $('#design-cont').append('<img src="'+ data.gambar +'" class="w-40 object-contain  my-3 shadow-md grayscale hover:grayscale-0 duration-500 shadow-maroon sm:w-52 md:w-64 lg:w-72">');
            });
            $.each(trid, function (i, data) { 
                $('#trid-cont').append('<img src="'+ data.gambar +'" class="aspect-video bg-myblack w-40 shadow-md grayscale hover:grayscale-0 duration-500 sm:w-52 md:w-64 lg:w-72">');
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