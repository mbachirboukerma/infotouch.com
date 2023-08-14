let navbar =document.getElementById('navbar');
let logo = document.getElementById('logo'); 
let buttontoggle = document.getElementById('buttontoggle');
let about = document.getElementById('aabout')
let courses = document.getElementById('acourses')
let events = document.getElementById('aevents')
let contact = document.getElementById('acontact')




window.onload = function() {
  window.scrollTo(0, 0);
};

window.onscroll = function() {
  // Check if the scroll position is greater than 246 pixels
  if (scrollY >= 211) {
    // Add the classes "bg-dark" and "navbar-dark" to the navbar
    navbar.classList.add('bg-ys');

  } else {
    // Remove the classes "bg-dark" and "navbar-dark" from the navbar
    navbar.classList.remove('bg-ys');
  }
};

logo.onclick=function(){
  window.scrollTo(0, 0);
}

buttontoggle.onclick=function(){
  navbar.style.background = '#15151e'
}

//

function scrollToSection(offset, targetId) {
  // Close the toggle when clicking a link in a small page
  if (window.innerWidth < 992) {
    var toggleButton = document.getElementById('buttontoggle');
    var navMenu = document.getElementById('navmenu');
    if (toggleButton && navMenu.classList.contains('show')) {
      toggleButton.click();
    }
  }

  // Scroll to the target section
  var targetSection = document.getElementById(targetId);
  if (targetSection) {
    var targetPosition = targetSection.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

