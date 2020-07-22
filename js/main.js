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

console.log("Hello. Welcome to my UX/UI portfolio website!")
