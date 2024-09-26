// Slick slider 
$(document).ready(function() {
    $('.main-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.thumbnail-slider',
        swipeToSlide: true
    });

    $('.thumbnail-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true
    });

    $('.prev-arrow').click(function() {
        console.log('Prev button clicked');
        $('.main-slider').slick('slickPrev');
    });
    
    $('.next-arrow').click(function() {
        console.log('Next button clicked');
        $('.main-slider').slick('slickNext');
    });
    
});

// Accordion list
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Slick slider
window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
      $('.product-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      });
    } else {
      if ($('.product-block').hasClass('slick-initialized')) {
        $('.product-block').slick('unslick');
      }
    }
  });

//   Slick slider mobile 

$(document).ready(function(){
    var $productBlock = $('.product-block');
    var slickInitialized = false;

    function initSlick() {
        if ($(window).width() < 801 && !slickInitialized) {
            $productBlock.slick({
                infinite: true,
                lazyLoad: 'ondemand',
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                arrows: true
            });
            slickInitialized = true;
        } else if ($(window).width() >= 801 && slickInitialized) {
            $productBlock.slick('unslick');
            slickInitialized = false;
        }
    }

    // Initialize on document ready
    initSlick();

    // Re-initialize on window resize
    $(window).resize(function() {
        initSlick();
    });
});

// $(document).ready(function(){
//     $('.product-block').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true,
// arrows: true
//     });
// });