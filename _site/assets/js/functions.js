  /*  function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } */




  $('#menu-icon').click(function(event){
      
      document.getElementById("myDropdown").classList.toggle("show");

    });
   
window.onclick = function(event) {
      if (!event.target.matches('#menu-icon')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } 






    $(window).scroll(function() {
      if ($(this).scrollTop()>45) {
        $('header').addClass("sticky");
        $('.logo').removeClass().addClass("logo-sticky");
        $('.blank').addClass("topi");
      }
      else {
        $('header').removeClass("sticky");
        $('.logo-sticky').removeClass().addClass("logo");
        $('.blank').removeClass("topi");


      }
    });
    
    
jQuery(function($) {
    function fixDiv() {
        var $cache = $('header');
        var $width = $('header').parent().width();
        if ($(window).scrollTop() > 45) {
            $cache.css({
                'width': $width
            });
        } else {
            $cache.css({
            });
        }
    }
    $(window).scroll(fixDiv);
    fixDiv();
 });
