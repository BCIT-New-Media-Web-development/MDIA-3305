$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

// Navigation scrolling animation
  $(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 1000) { // check if user scrolled more than 50 from top of the browser window
        $(".fixed-top").css("background-color", "#98CAD8"); // if yes, then change the color of class "navbar-fixed-top" to white (#98CAD8)
        $(".nav-link").css("color", "#fff"); 
      } else {
        $(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });

