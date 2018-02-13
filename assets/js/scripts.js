
  // var navButton = 
  var navUl = document.getElementsByClassName("nav-ul");
       
    function toggleMobileMenu() {
      navUl[0].style.transition = "max-height 0.5s";
      navUl[0].classList.toggle("hide-ul");
    }
    
    document.getElementById("nav-menu-button").onClick = toggleMobileMenu;

