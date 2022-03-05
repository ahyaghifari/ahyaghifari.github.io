$(document).ready(function () {

            var scene = $('.about-body').get(0);
            var parallaxInstance = new Parallax(scene, {
                hoverOnly: true,
                pointerEvents: true,
            });



            // PROJECTS
    $(".arts").hide();
    
            $('#btn-website').click(function() {
                $('.arts').hide();
                $('.website').show();
                $('#btn-arts').removeClass('active');
                $('#btn-website').addClass('active');
            });

            $('#btn-arts').click(function () { 
                $('.website').hide();
                $('#btn-website').removeClass('active');
                $('#btn-arts').addClass('active');
                $('.arts').show();
            });
    
    $('.arts-btns').click(function () {
        var artlist = $(this).attr('id');

                if(artlist == "btn-design"){
                    $('.design').show();
                    $('.draw, .trid').hide();
                }else if(artlist == "btn-draw"){
                    $('.draw').show();
                    $('.design, .trid').hide();
                }else if(artlist == "btn-trid"){
                    $('.trid').show();
                    $('.design, .draw').hide();
                }         
    });

             
             const scrollContainer = document.querySelector(".projects-body");

            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
            


            // IMAGE CAN'T DOWNLOAD
            $('.img-projects').bind('contextmenu', function (e) {
                return false;
            }); 

         
        });