$(document).ready(function () {

    let mm = gsap.matchMedia();   

    function animation() {
        gsap.from('h1', {
            x: -30,
            opacity: 0,
            duration: 1.5
        })
        gsap.from('h2', {
            width: 0,
            opacity: 0,
            duration: 1,
            delay: 1.5
        })

        gsap.from('#website', {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 2.5
        })

        setTimeout(() => {
            $('#website').removeClass('hidden')
            $('.photoshop-carousel').removeClass('hidden')
        }, 500);
    }

    mm.add('(max-width: 767px)', () => {
          animation()
    })
    mm.add('(min-width: 768px)', () => {
        animation()
    })

    let owl = $('.website-carousel').owlCarousel({
        items: 1,
        stagePadding: 2,
        center: true,
        responsive: {
            0: {
                autoplay: false,
                loop: true,
                items: 1
            },
            768: {
                autoplay: false,
                loop: true,
                items: 3
            }
        }
    })
    let owlPs = $('.photoshop-carousel').owlCarousel({
        items: 1,
        margin: 15,
        stagePadding: 10,
        center: true,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            1208: {
                items: 2
            }
        }
    })

    $('#portfolio-preview-suggest').delay(10000).fadeOut(1000, function () {
        $(this).remove()
    })

    owl.on('dragged.owl.carousel', function () {
        $('#portfolio-preview-suggest').remove()
    })

    let websites = []

    function appendWebsites() {
        $('.website-carousel div').remove()
        $.each(websites, function (i, w) { 
            $('.website-carousel').append(`<div class="h-[250px] w-[250px] md:h-[300px] md:w-[300px] aspect-[1/1] w-full flex justify-center items-center overflow-visible">
                <input type="hidden" value="${w.code}" class="website-code">
                    <img src="/assets/images/${w.code}/preview.png" class="object-cover h-[250px] w-[250px] md:h-[300px] md:w-[300px] aspect-[1/1] object-cover shadow js-tilt" alt="">
            </div>`)
        });
        owl.owlCarousel('initialize')
        $('.js-tilt').tilt({
            maxTilt: 5,
            glare: true,
            // maxGlare: 2
        })
    }

    $.getJSON("assets/data/portfolio.json", function (data) {
            websites = data
            $('#website-name').html(data[0].name)
            $('#website-type').html(data[0].type)
            $('#website-note').html(data[0].note)
            $('#website-uses').html(data[0].uses)
            $('#website-link').attr('href', data[0].link)
            var previews = data[0].previews
            if (previews.length > 0) {
                previews.forEach((v) => {
                    $('#website-previews').append(`
                    <img src="assets/images/${data[0].code}/${v}" />
                    `)
                })    
            }
            appendWebsites()
        }
    );
    
    
    owl.on('changed.owl.carousel', function (event) {
        setTimeout(() => {
            var find = websites.find((v) => v.code == $('.owl-item.active.center .website-code').val())            
            $('#website-name').html(find.name)
            $('#website-type').html(find.type)
            $('#website-note').html(find.note)
            $('#website-uses').html(find.uses)
            $('#website-link').attr('href', find.link)
            $('#website-previews img').remove()
            $('#website-type-project').html(find.project_type + " Project")
            if (find.project_type == "Real") {
                $('#website-type-project').addClass('bg-red-800')
                $('#website-type-project').removeClass('bg-neutral-800')
                $('#website-type-project').addClass('font-semibold')
            } else {
                $('#website-type-project').removeClass('bg-red-800')
                $('#website-type-project').addClass('bg-neutral-800')            
                $('#website-type-project').removeClass('font-semibold')
            }
            var previews = find.previews
            if (previews.length > 0) {
                previews.forEach((v) => {
                    $('#website-previews').append(`
                    <img src="assets/images/${find.code}/${v}" />
                    `)
                })    
            }
        }, 100);
    })

     $('.nav-btn').click(function () {
        $('#nav-list').toggleClass('active')
    })

});