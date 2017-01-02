/**
 * Created by Administrator on 2017/1/1.
 */

$(document).ready(function () {
    $(".fullscreen-static-image1").backstretch(
        ["images/promo1.jpg"],
        {
            duration: 10000,
            fade: 1500
        }
    );

    $(".fullscreen-static-image2").backstretch(
        ["images/promo2.jpg"],
        {
            duration: 10000,
            fade: 1500
        }
    );

    $('.owl2-carousel-v1').owlCarousel({
        items: 4,
        margin: 30,
        autoplay: true,
        loop: true,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            },
            1200:{
                items: 4
            }
        },
    });

    $('.owl2-carousel-v3').owlCarousel({
        // margin: 1,
        loop: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        navContainerClass: 'owl-buttons',
        responsive: {
            1200:{
                items: 1,
            }
        }
    });


    App.init();
});