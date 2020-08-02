/*jslint browser */
/* Toggle between adding and removing the "responsive" class
to menu when the user clicks on the icon */

var y = window.matchMedia("(min-width: 1800px)");

function myFunction() {
    var x = document.getElementById("myTopmenu");
    var el;
    // To remove a menu element for Mobile
    if (window.location.href.includes("index.html")) {
        if (document.getElementById("index_click")) {
            el = document.getElementById("index_click");
            el.remove();
        }
    } else {
        if (window.location.href.includes("about.html")) {
            if (document.getElementById("about_click")) {
                el = document.getElementById("about_click");
                el.remove();
            }
        }
    }
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function openSidebar(x, y) {
    
    if (x.matches) {
        document.getElementById("mySidenav")
            .style.width = "150px";
    } else {
        if (y.matches) {
            document.getElementById("mySidenav")
                .style.width = "400px";
        } else {
            document.getElementById("mySidenav")
                .style.width = "250px";
        }
    }
}

function closeNavTimer() {
    document.getElementById("mySidenav")
        .style.width = "0";
}

function closeNav() {
    document.getElementById("mySidenav")
        .style.width = "0";
}

function openNav() {
    var x = window.matchMedia("(max-width: 500px)");
    
    if (document.getElementById("menubutton") || document.getElementById("menubutton_vela")) {
        openSidebar(x, y);
    }
}

$(".menu_button")
    .each(function() {
        $(this)
            .click(function() {
                setTimeout(closeNavTimer(), 100);
            });
    });
// Select all links with hashes, smooth scroll
$("a[href*='#']")
    // Remove links that don't actually link to anything
    .not("[href='#']")
    .not("[href='#0']")
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname ===
            this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $("[name=' + this.hash.slice(1) + ']");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body")
                    .animate({
                        scrollTop: target.offset()
                            .top
                    }, 1500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        /*if ($target.is(":focus")) {// Checking if the target was focused
                            return false;
                        }
                        else {
                            // Adding tabindex for elements not focusable
                            $target.attr("tabindex","-1");
                            $target.focus(); // Set focus again
                            }*/
                    });
            }
        }
    });
// Animation on scroll
$(window)
    .scroll(function() {
        if (window.location.href.includes("index.html")) {
            var fitted_height = document.getElementById("fitted_anim")
                .clientHeight;
            var vela_height = document.getElementById("vela_anim")
                .clientHeight;
            var trip_height = document.getElementById("trip_anim")
                .clientHeight;
            var skyline_height = document.getElementById("skyline_anim")
                .clientHeight;
            var z = $(window)
                .scrollTop();
            var offset = 100;
            var tripoffset = 300;
            var expr;


            $(".logo_cover")
                .each(function() {

                    if (z > (fitted_height) - offset) {
                        $(this)
                            .addClass("fitted_logo_anim");
                    } else {
                        $(this)
                            .removeClass("fitted_logo_anim");
                    }
                });
            $(".meditate")
                .each(function() {
                    if (z > (fitted_height) - offset) {
                        $(this)
                            .addClass("animate_test");
                    } else {
                        $(this)
                            .removeClass("animate_test");
                    }
                });

            if(y.matches){
                expr =fitted_height;
            }
            else{
                expr =fitted_height + vela_height;
            }        

            $(".ocean")
                .each(function() {
                   
                        if (z > (expr) - offset) {
                            $(this)
                                .addClass("wave_anim");
                        } else {
                            $(this)
                                .removeClass("wave_anim");
                        }
                    
                });
            $(".surfer")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("surfer_anim");
                    } else {
                        $(this)
                            .removeClass("surfer_anim");
                    }
                });
            $(".surfboard")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("surfboard_anim");
                    } else {
                        $(this)
                            .removeClass("surfboard_anim");
                    }
                });


            if(y.matches){
                expr =fitted_height+trip_height;
            }
            else{
                expr =fitted_height + vela_height + trip_height;
            }    
                    
            var i = 1;
            $(".marker")
                .each(function() {
                    var durationms;
                    if (z > (expr) - tripoffset) {
                        $(this)
                            .addClass("hide_anim");
                        durationms = i * 3000;
                        $(this)
                            .css("animation-duration", durationms + "ms");
                        i += 1;
                    } else {
                        $(this)
                            .removeClass("hide_anim");
                    }
                });
            var j = 1;
            $(".question")
                .each(function() {
                    var delayms;
                    if (z > (expr) - tripoffset) {
                        $(this)
                            .addClass("pop_anim");
                        if (j === 1) {
                            delayms = 700;
                        } else {
                            delayms = ((j * 3000) - 2000);
                        }
                        $(this)
                            .css("animation-delay", delayms + "ms");
                    } else {
                        $(this)
                            .removeClass("pop_anim");
                    }
                    j += 1;
                });
            var l = 1;
            $(".answer")
                .each(function() {
                    var delayams;
                    if (z > (expr) - tripoffset) {
                        $(this)
                            .addClass("pop_anim");
                        delayams = 1900 + ((l - 1) * 3000);
                        $(this)
                            .css("animation-delay", delayams + "ms");
                    } else {
                        $(this)
                            .removeClass("pop_anim");
                    }
                    l += 1;
                });
            var k = 1;
            $(".location")
                .each(function() {
                    var durationlocms;
                    if (z > (expr) - tripoffset) {
                        $(this)
                            .addClass("hide_anim");
                        durationlocms = 15500 + ((k - 1) * 300);
                        $(this)
                            .css("animation-duration", durationlocms + "ms");
                        k += 1;
                    } else {
                        $(this)
                            .removeClass("hide_anim");
                    }
                });

            

            $(".skyline_background")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("day_to_night_anim");
                    } else {
                        $(this)
                            .removeClass("day_to_night_anim");
                    }
                });
            $(".moon")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("rising_anim");
                    } else {
                        $(this)
                            .removeClass("rising_anim");
                    }
                });
            $(".faniuel1")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("faniuel1_anim");
                    } else {
                        $(this)
                            .removeClass("faniuel1_anim");
                    }
                });
            $(".sanfran")
                .each(function() {
                    if (z > (expr) - offset) {
                        $(this)
                            .addClass("sanfran_anim");
                    } else {
                        $(this)
                            .removeClass("sanfran_anim");
                    }
                });
        }
    });