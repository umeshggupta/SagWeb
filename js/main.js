$(document).ready(function () {
    // Header Menu


    var headerHeight = $('.header-section ').innerHeight() + 'px';
    $('body').css('padding-top', headerHeight);
    $('.hero-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});
$(document).ready(
    function () {
        $("html").niceScroll();
    }
);
$(document).ready(function () {
    "use strict";
    $(".scroll").click(function (event) {

        event.preventDefault();

        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 140;

        $('html, body').animate({ scrollTop: target_top }, 1200);
    });
    $(".m-menu-btn").click(function () {
        $(".header-nav").slideToggle(600);
        $(this).toggleClass("m-menu-btn-ext");
    });

});
$(".menu ul li a").on('click', function () {
    if ($(window).width() <= 767) {
        $(".header-nav").hide();
        $(".m-menu-btn").removeClass('m-menu-btn-ext');
    } else {
        $(".header-nav").show();
    }
});
