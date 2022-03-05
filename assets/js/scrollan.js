AOS.init()
function reveal() {
                var reveals = document.querySelectorAll(".form-reveal");

                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("now");
                    } else {
                        reveals[i].classList.remove("now");
                    }
                }
            }

window.addEventListener("scroll", reveal);
            
function reveal2() {
                var reveals = document.querySelectorAll("#projects");

                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("reveal");
                    } else {
                        reveals[i].classList.remove("reveal");
                    }
                }
            }

window.addEventListener("scroll", reveal2);
        
            
function reveal3() {
                var reveals = document.querySelectorAll(".abouts");

                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 160;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("now");
                    } else {
                        reveals[i].classList.remove("now");
                    }
                }
            }

window.addEventListener("scroll", reveal3);
        




//             (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector(".projectss");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();