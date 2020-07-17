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
console.log("Hello. Welcome to my UX/UI portfolio website!")

/*$('.myDiv').click(function(e)
{
    $(this).toggleClass('fullscreen');

});*/
