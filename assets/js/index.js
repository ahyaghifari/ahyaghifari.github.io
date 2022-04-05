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
        return '<div class="website-comp projects-items"><img src="'+gambar+'" alt="'+linkshow+'" class="projects-images"><a href="'+link+'">'+linkshow+'</a></div>';
    }

    function forimages(gambar) {
        return '<div class="projects-items"><img src="'+ gambar +'" class="projects-images"></div>';
    }

    // PORTOFOLIO
    $.getJSON('data/portofolio.json', function (data) {
        let website = data.portofolio[0].website;
        let design = data.portofolio[1].design;
        let trid = data.portofolio[2].trid;

            $.each(website, function (i, data) { 
                $('#website-cont').append(forwebsite(data.gambar, data.link, data.linkshow));
            });
            $.each(design, function (i, data) { 
                $('#design-cont').append(forimages(data.gambar));
            });
            $.each(trid, function (i, data) { 
                $('#trid-cont').append(forimages(data.gambar));
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