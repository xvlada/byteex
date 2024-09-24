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

// $(document).ready(function(){
//     $('.reviews-container').slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       autoplay: true,
//       infinite: true,
//       autoplaySpeed: 3000,
//       arrows: true,
//       dots: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     });
//   });

