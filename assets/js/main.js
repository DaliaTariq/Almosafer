$(document).ready(function () {
    $('#show-search-box').click(function () {
        $("#hidden-search-box").toggle();
    });

    $('.owl-carousel.buldings').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-carousel.cars').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    /**********************back to top********************/
    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
  return false;

  
});

       //Top Nav (Scroling Navbar)//
       scrollShow = false;
       $(window).scroll(function () {
           scrollTop = $(window).scrollTop();
   
           if (scrollTop > 0) {
               if (scrollShow)
                   return;
               console.log(scrollShow);
               scrollShow = true;
               $('.navbar').addClass('scrollNav');
               $('.navbar').css('opacity', 0)
                   .slideDown('slow').animate({ opacity: 1 },
                       { queue: false, duration: 'slow' }
                   );
           }
           else {
               $('.navbar').removeClass('scrollNav');
               /*console.log('false');*/
               scrollShow = false;
           }
       });



  /**************************************************/ 
  new WOW().init();


  

});