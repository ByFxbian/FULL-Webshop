$(document).ready(function(){

    $("#banner-area .owl-carousel").owlCarousel({
        autoPlay: 3000,
        dots: true,
        items: 1,
    });

    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

});