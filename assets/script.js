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
        return '<div class="group overflow-hidden object-contain relative w-9/12 md:w-4/12  bg-white grayscale hover:grayscale-0 duration-500"><a href="'+link+'" target="_blank"><img src="'+gambar+'" alt="'+linkshow+'"><p class="absolute md:text-3xl inset-y-1/2 inset-x-1/3 bg-black h-fit text-maroon font-montserrat font-bold opacity-0 w-0 group-hover:opacity-100 group-hover:w-fit transition-all duration-500 select-none">'+linkshow+'</p></a></div>';
    }

    // PORTOFOLIO
    $.getJSON('assets/portofolio.json', function (data) {
        let website = data.portofolio[0].website;
        let design = data.portofolio[1].design;

            $.each(website, function (i, data) { 
                $('#website-cont').append(forwebsite(data.gambar, data.link, data.linkshow));
            });
            $.each(design, function (i, data) { 
                $('#design-cont').append('<img src="'+ data.gambar +'" class="w-32 m-3 object-cover grayscale hover:grayscale-0 duration-500 sm:w-52 md:w-64 lg:w-72">');
            });
    });

    // YEAR
    var d = new Date();
    $('#year').html(d.getFullYear());
    
});
