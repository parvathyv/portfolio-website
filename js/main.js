/* Toggle between adding and removing the "responsive" class to menu when the user clicks on the icon */


function myFunction() {
   
  var x = document.getElementById("myTopmenu");
   
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }

}

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

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



console.log("Hello. Welcome to my UX/UI portfolio website!")
