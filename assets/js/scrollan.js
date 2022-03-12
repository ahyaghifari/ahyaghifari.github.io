AOS.init();
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

