$(document).ready(function () {

    // IMAGES
    // $('#projects').on('contextmenu', 'img', function (e) {
    //     return false;
    // });

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

    
});