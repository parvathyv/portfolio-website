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


// code for the5questiontrip animation in JS
/*
var mls = document.getElementsByClassName("marker");

for(var i = 1; i < mls.length+1; i++) {
   
    var idName="marker"+i;
    var x = document.getElementById(idName);
    //for svg element, className does not work, use setAttribute 
    x.setAttribute("class","marker hide_anim");
    var durationinms=i*3000+"ms";
    x.style.animationDuration=durationinms;
}

var qls = document.getElementsByClassName("question");

for(var i = 1; i < qls.length+1; i++) {
   
    var idName="q"+i;
    var x = document.getElementById(idName);
    //for svg element, className does not work, use setAttribute 
    x.setAttribute("class","question pop_anim");
    if(i==1){
        var delayinms=700+'ms';
    }else{
        var delayinms=((i*3000)-2000)+"ms";
    }
    x.style.animationDelay=delayinms;
}


var als = document.getElementsByClassName("answer");

for(var i = 1; i < qls.length+1; i++) {
   
    var idName="a"+i;
    var x = document.getElementById(idName);
    //for svg element, className does not work, use setAttribute 
    x.setAttribute("class","answer pop_anim");
    if(i==1){
        var delaynum=1900;
        
    }else{
        delaynum=delaynum+3000;
    }
      
    var delayinms=delaynum+"ms";  
    x.style.animationDelay=delayinms;
}

var lls = document.getElementsByClassName("location");

for(var i = 1; i < lls.length+1; i++) {
   
    var idName="loc"+i;
    var x = document.getElementById(idName);
    //for svg element, className does not work, use setAttribute 
    x.setAttribute("class","location hide_anim");
    if(i==1){
        var durationnum=15500;
        
    }else{
        durationnum=durationnum+300;
        
    }
    var durationinms=durationnum+"ms";
    x.style.animationDuration=durationinms;
}

var als = document.getElementsByClassName("answer");

function answer_anim(i) {
   
    $(this).addClass("pop");
    if (--i > -1) {
      setTimeout(function () { answer_anim(i); }, 3000);
    }
}

answer_anim(als.length);

*/


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





// Animation on scroll


   $(window).scroll(function () {

        if(window.location.href.includes("index.html")){

            var fitted_height=document.getElementById('fitted_anim').clientHeight;
            var vela_height=document.getElementById('vela_anim').clientHeight;
            var trip_height=document.getElementById('trip_anim').clientHeight;
            var skyline_height=document.getElementById('skyline_anim').clientHeight;
            var z=$(window).scrollTop();
            var offset=100;
            

            $('.logo_cover').each(function () {
             
               
                if (z > (fitted_height)-offset) {
                        $(this).addClass("fitted_logo_anim");
                    } else {
                        $(this).removeClass("fitted_logo_anim");
                    }
            });
           

            $('.meditate').each(function () {
             
               
                if (z > (fitted_height)-offset) {
                        $(this).addClass("animate_test");
                    } else {
                        $(this).removeClass("animate_test");
                    }
            });

            $('.ocean').each(function () {
              
                    
                        
                if (z > (fitted_height+vela_height)-offset) {
                
                        $(this).addClass("wave_anim");
                    } else {
                        $(this).removeClass("wave_anim");
                    }
            });

            $('.surfer').each(function () {
               
                if (z > (fitted_height+vela_height)-offset) {
                        $(this).addClass("surfer_anim");
                    } else {
                        $(this).removeClass("surfer_anim");
                    }
            });

            $('.surfboard').each(function () {
               
                if (z > (fitted_height+vela_height)-offset) {
                        $(this).addClass("surfboard_anim");
                    } else {
                        $(this).removeClass("surfboard_anim");
                    }
            });


            var i=1;

            $('.marker').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height)-offset) {
                        $(this).addClass("hide_anim");
                        var durationms=i*3000;
                        console.log(durationms);
                        $(this).css('animation-duration',durationms  + 'ms');
                        i++;
                    } else {
                        $(this).removeClass("hide_anim");
                      
                    }
            });


            var j=1;
            $('.question').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height)-offset) {
                        $(this).addClass("pop_anim");
                        if(j==1){
                            var delayms=700;
                        }
                        else{
                        var delayms=((j*3000)-2000);
                        }
                        $(this).css('animation-delay',delayms  + 'ms');
                        
                    } else {
                        $(this).removeClass("pop_anim");
                      
                    }
                    j++;
            });


            var l=1;
            $('.answer').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height)-offset) {
                        $(this).addClass("pop_anim");
                        var delayams=1900+((l-1)*3000);
                      
                        $(this).css('animation-delay',delayams  + 'ms');
                        
                    } else {
                        $(this).removeClass("pop_anim");
                      
                    }
                    l++;
            });

            var k=1;
            $('.location').each(function () {
            
                if (z > (fitted_height+vela_height+trip_height)-offset) {
                        $(this).addClass("hide_anim");
                        var durationlocms=15500+((k-1)*300);
                       
                        $(this).css('animation-duration',durationlocms  + 'ms');
                        k++;
                        
                    } else {
                        $(this).removeClass("hide_anim");
                      
                    }
                   
            });

     
            $('.skyline_background').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height+skyline_height)-offset) {
                        $(this).addClass("day_to_night_anim");
                    } else {
                        $(this).removeClass("day_to_night_anim");
                      
                    }
            });




            $('.moon').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height+skyline_height)-offset) {
                        $(this).addClass("rising_anim");
                    } else {
                        $(this).removeClass("rising_anim");
                     
                    }
            });

            $('.faniuel1').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height+skyline_height)-offset) {
                        $(this).addClass("faniuel1_anim");
                    } else {
                        $(this).removeClass("faniuel1_anim");
                    
                    }
            });

             
            $('.sanfran').each(function () {
             
                if (z > (fitted_height+vela_height+trip_height+skyline_height)-offset) {
                        $(this).addClass("sanfran_anim");
                    } else {
                        $(this).removeClass("sanfran_anim");
                       
                    }
            });

        }
    });



