(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        /*---------------------------------------------*
        * Carousel
        ---------------------------------------------*/
        $('#Carousel').carousel({
            interval: 5000,
            item: 2
        });

        /*---------------------------------------------*
        * Smooth Scrolling
        ---------------------------------------------*/
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    });

    /*---------------------------------------------*
        * STICKY scroll
    ---------------------------------------------*/
    $.localScroll();

    jQuery(window).load(function () {});

}(jQuery));
