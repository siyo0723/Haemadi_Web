//scroll header change
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 99) {
            $('nav').addClass('navbar-fixed');
            $('nav').removeClass('navbar');
        } else {
            $('nav').removeClass('navbar-fixed');
            $('nav').addClass('navbar');
        }
    });
});

// menuBar click 위치 이동
$(document).ready(function () {
    $('#nav-link1').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.main_video_bg';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link2').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.content2';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link3').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.content5';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link4').on('click', function (e) {
        e.preventDefault();
        var targetSelector = 'footer';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('.navbar_menu-logo').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.content1';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });
});


// 맨 위로 이동 버튼
let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
};

//scroll to top
var display_backtotop = 200; // Scrolled pixels from top until the link appears

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > display_backtotop) {
            $(".btn-moveTop").fadeIn();
        } else {
            $(".btn-moveTop").fadeOut();
        }
    });

    $(document).on("click", ".btn-moveTop", function (e) {
        $("html, body").animate({ scrollTop: 0 });

        e.preventDefault();
    });
});