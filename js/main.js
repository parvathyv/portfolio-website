/* Toggle between adding and removing the "responsive" class to menu when the user clicks on the icon */


function myFunction() {
   
    var x = document.getElementById("myTopmenu");
  
    // To remove a menu element for Mobile
    if(window.location.href.includes("index.html")){
       if(document.getElementById("index_click")){
            var el=document.getElementById("index_click");
            el.remove();
        } 
    }else{
        
        if(window.location.href.includes("about.html")){
            if(document.getElementById("about_click")){
                var el=document.getElementById("about_click");
                el.remove();
            }
        }else{
          
            if(window.location.href.includes("fitted.html")){
                if(document.getElementById("work_click")){
                    var el=document.getElementById("work_click");
                    el.remove();
                }
            }
        }
    }

    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }

}

/*function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}*/
function openSidebar(x) {

    if (x.matches) { 
        document.getElementById("mySidenav").style.width = "150px";
    } else {
            document.getElementById("mySidenav").style.width = "250px";
        }
}



function openNav(){

    var x = window.matchMedia("(max-width: 500px)");
    if(document.getElementById("menubutton")||document.getElementById("menubutton_vela")){
        openSidebar(x);
    }
};


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var els = document.getElementsByClassName("menu_button");

for(var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener("click", function() {setTimeout(closeNavTimer() , 200)});
}


function closeNavTimer() {
    document.getElementById("mySidenav").style.width = "0";
}



/*function setAnim(){
    
    var x = document.getElementById("meditate");

    if (el_anim.className === "play") {
        x.className += " animate_test";
    } else {
        x.className = "meditate";
    }
    $("this").removeClass("play");
    jQuery('.pause').css('opacity') = '1';   
}



var el_anim = document.getElementById("play");
el_anim.addEventListener("click", function() {setTimeout(setAnim() , 100)});

/*window.addEventListener("scroll", function(event) {
        ypos = this.scrollY;
        xpos =this.scrollX;
     	
}, false);*/

// Select all links with hashes, smooth scroll
$('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname) 
    {
      // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
      }
    }
});



var fitted_height=document.getElementById('fitted_anim').clientHeight;
var vela_height=document.getElementById('vela_anim').clientHeight;
var trip_height=document.getElementById('trip_anim').clientHeight;
var skyline_height=document.getElementById('skyline_anim').clientHeight;


console.log(fitted_height);
console.log(fitted_height+vela_height);
console.log(trip_height+fitted_height+vela_height);
console.log(trip_height+fitted_height+vela_height+skyline_height);


// Animation on scroll
$(window).scroll(function () {
    var z=$(window).scrollTop();

    $('.logo_cover').each(function () {
     
       
        if (z > (fitted_height)) {
                $(this).addClass("fitted_logo_anim");
            } else {
                $(this).removeClass("fitted_logo_anim");
            }
    });
   

    $('.meditate').each(function () {
     
       
        if (z > (fitted_height)) {
                $(this).addClass("animate_test");
            } else {
                $(this).removeClass("animate_test");
            }
    });

    $('.ocean').each(function () {
      
            
                
        if (z > (fitted_height+vela_height)) {
        
                $(this).addClass("wave_anim");
            } else {
                $(this).removeClass("wave_anim");
            }
    });

    $('.surfer').each(function () {
       
        if (z > (fitted_height+vela_height)) {
                $(this).addClass("surfer_anim");
            } else {
                $(this).removeClass("surfer_anim");
            }
    });

    $('.surfboard').each(function () {
       
        if (z > (fitted_height+vela_height)) {
                $(this).addClass("surfboard_anim");
            } else {
                $(this).removeClass("surfboard_anim");
            }
    });

    $('.skyline_background').each(function () {
     
        if (z > (fitted_height+vela_height+trip_height+skyline_height)) {
                $(this).addClass("day_to_night_anim");
            } else {
                $(this).removeClass("day_to_night_anim");
                /*$(this).addClass("fading_anim");*/
            }
    });

    $('.moon').each(function () {
     
        if (z > (fitted_height+vela_height+trip_height+skyline_height)) {
                $(this).addClass("rising_anim");
            } else {
                $(this).removeClass("rising_anim");
                /*$(this).addClass("fading_anim");*/
            }
    });
});



console.log("Hello. Welcome to my UX/UI portfolio website!")
