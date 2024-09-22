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

