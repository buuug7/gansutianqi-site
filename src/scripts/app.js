/**
 * Created by Administrator on 2017/1/1.
 */

$(document).ready(function () {

    $('.owl2-carousel-v1').owlCarousel({
        items: 4,
        margin: 30,
        autoplay: true,
        loop: true,
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
            1370: {
                items: 5
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

    var PromoSlider = new MasterSlider();
    PromoSlider.setup('masterslider-promo' , {
        width: 1400, // PromoSlider standard width
        height: 580, // PromoSlider standard height
        speed: 70,
        layout: 'fullwidth',
        loop: true,
        autoplay: true,
        overPause: true,
        dir: 'v'
    });
    // Adds Arrows navigation control to the PromoSlider
    PromoSlider.control('arrows');
    PromoSlider.control('lightbox');
    PromoSlider.control('thumblist', {autohide:false, dir:'v', align:'left', width:200, height:120, margin:0, space:10 , hideUnder:500, inset:true});


    App.init();
});