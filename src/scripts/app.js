/**
 * Created by Administrator on 2017/1/1.
 */

$(document).ready(function () {


    App.init();
    App.initCounter();


    //
    // index
    //
    $('.owl2-carousel-v0').owlCarousel({
        items: 2,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        },
    });


    $('.owl2-carousel-v1').owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
    });

    $('.owl2-carousel-v2').owlCarousel({
        items: 6,
        margin: 30,
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            300: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
        },
    });

    $('.owl2-carousel-v3').owlCarousel({
        // margin: 1,
        loop: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        navContainerClass: 'owl-buttons',
        responsive: {
            1200: {
                items: 1,
            }
        }
    });


    //
    // index-farm
    //
    $(".h__img_1").backstretch(
        ["images/farm/header.jpg"],
        {
            centeredX: true,
            centeredY: true,
            duration: 10000,
            fade: 1500
        }
    );

    $(".h__img_2").backstretch(
        ["images/farm/shangji.jpg"],
        {
            centeredX: true,
            centeredY: true,
            duration: 10000,
            fade: 1500
        }
    );

    $('.owl2-carousel-farm-1').owlCarousel({
        // margin: 1,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsiveClass: true,
        pagination : true,
        nav: false,
        responsive: {
            1200: {
                items: 1,
               // autoHeight: true,
            }
        }
    });

    //
    // o2o
    //

    $('.owl2-carousel-o2o-1').owlCarousel({
        // margin: 1,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsiveClass: true,
        pagination : true,
        nav: false,
        responsive: {
            1200: {
                items: 1,
                // autoHeight: true,
            }
        }
    });

    //
    // xxh
    //

    $(".h__img_xxh_1").backstretch(
        ["images/xxh/xxh-header.jpg"],
        {
            centeredX: true,
            centeredY: true,
            duration: 10000,
            fade: 1500
        }
    );


    //
    // coming soon page
    //

});