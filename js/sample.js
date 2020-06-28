$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".navbar").css("background","rgba(0,0,0,0.7)");
    }
    else{
    	$(".navbar").css("background","rgba(0,0,0,0");
    }
  });
});

$('a[href^="#"]').click(function () {
  $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);

  return false;
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$(document).ready(function() {
  $('#main-content').fadeIn();
});


$(document).ready(function(){
  $(".hide1").hide(0).delay(200).fadeIn(3000)
});



$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).height();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1500);
                  
          }
          
      }); 
  
  });
  
});



/*
$(function () {
  $(document).scroll(function () {
    var $nav = $(“.sticky-top”);
    $nav.toggleClass(‘scrolled’, $(this).scrollTop() > $nav.height());
  });
});*/