// video2_bg
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video_bg2');
    let isPlaying = false;

    // 비디오 초기화
    video.load();

    window.addEventListener('scroll', () => {
        const videoTop = video.getBoundingClientRect().top;

        if (videoTop < window.innerHeight && videoTop > -video.clientHeight && !isPlaying) {
            // 이미 재생 중인지 확인
            if (video.paused) {
                video.play();
            }
            isPlaying = true;
        }

        if (videoTop > window.innerHeight || videoTop < -video.clientHeight) {
            if (!video.paused) {
                video.pause();
                video.currentTime = 0;
            }
            isPlaying = false;
        }
    });
});




// section2

// jQuery 로드 여부 확인
if (typeof jQuery == 'undefined') {
    console.error('jQuery is not loaded.');
} else {
    // jQuery가 로드된 경우
    jQuery(document).ready(function ($) {
        $(window).scroll(function () {
            const scrollTop = $(window).scrollTop();
            const textArea = $('.content2');
            const textTop = textArea.offset().top;
            const textHeight = textArea.height();
            const textBottom = textTop + textHeight - 500;
            const fixed = $('.fixed');


            const position = (scrollTop - textTop + 500) / textHeight;

            if (position >= 0 && position < 0.30) {
                $('.text-page1, .text-page2, .text-page3').css('opacity', 1); // 나타나게 함
                $('.text-page4, .text-page5, .text-page6').css('opacity', 0); // 숨김
            } else if (position >= 0.30 && position < 0.50) {
                $('.text-page4, .text-page5, .text-page3').css('opacity', 1); // 나타나게 함
                $('.text-page1, .text-page2, .text-page6').css('opacity', 0); // 숨김
            } else if (position >= 0.50 && position < 0.80) {
                $('.text-page4, .text-page2, .text-page6').css('opacity', 1); // 나타나게 함
                $('.text-page1, .text-page3, .text-page5').css('opacity', 0); // 숨김
            }else if (position >= 0.80 && position < 0.99) {
                $('.text-page4, .text-page2, .text-page6').css('opacity', 0);
            }


            if (scrollTop >= textTop + 500 && scrollTop <= textBottom) {
                textArea.css('opacity', '1');
                fixed.addClass('active');
            } else if (scrollTop < textTop) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }

            if (scrollTop >= textBottom - 500) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }
        });
    });
}

//section3

// jQuery 로드 여부 확인
if (typeof jQuery == 'undefined') {
    console.error('jQuery is not loaded.');
} else {
    // jQuery가 로드된 경우
    jQuery(document).ready(function ($) {
        $(window).scroll(function () {
            const scrollTop = $(window).scrollTop();
            const textArea = $('.content3');
            const textTop = textArea.offset().top;
            const textHeight = textArea.height();
            const textBottom = textTop + textHeight - 500;
            const fixed = $('.fixed2');
            
            const boat_1 = $('.content_boat1');
            const boatUrl_1 = './source/boat_1-1.png';
            
            const position = (scrollTop - textTop + 500) / textHeight;

            if (position >= 0 && position < 0.25) {
                $('.content_boat1').css('opacity', 1); // 나타나게 함
                boat_1.css('background-image', 'url(' + boatUrl_1 + ')');
                $('.content_boat2').css('opacity', 0); // 숨김
                $('.content_boat3').css('opacity', 0); // 숨김
                $('.content_boat4').css('opacity', 0); // 숨김
            } else if (position >= 0.25 && position < 0.40) {
                $('.content_boat2').css('opacity', 1); // 나타나게 함
                boat_2.css('background-image', 'url(' + boatUrl_1 + ')');
                $('.content_boat1').css('opacity', 0); // 숨김
                $('.content_boat3').css('opacity', 0); // 숨김
                $('.content_boat4').css('opacity', 0); // 숨김
            } else if (position >= 0.40 && position < 0.60) {
                $('.content_boat3').css('opacity', 1); // 나타나게 함
                boat_3.css('background-image', 'url(' + boatUrl_1 + ')');
                $('.content_boat1').css('opacity', 0); // 숨김
                $('.content_boat2').css('opacity', 0); // 숨김
                $('.content_boat4').css('opacity', 0); // 숨김
            } else if (position >= 0.60 && position < 0.85) {
                $('.content_boat4').css('opacity', 1); // 나타나게 함
                boat_4.css('background-image', 'url(' + boatUrl_1 + ')');
                $('.content_boat1').css('opacity', 0); // 숨김
                $('.content_boat2').css('opacity', 0); // 숨김
                $('.content_boat3').css('opacity', 0); // 숨김
            } else if (position >= 0.85 && position < 0.99) {
                $('.content_boat4').css('opacity', 0); 
                boat_4.css('background-image', 'url(' + boatUrl_1 + ')');
            }


            if (scrollTop >= textTop + 500 && scrollTop <= textBottom) {
                textArea.css('opacity', '1');
                fixed.addClass('active');
            } else if (scrollTop < textTop) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }

            if (scrollTop >= textBottom - 500) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }
        });
    });
}

// video_drop
document.addEventListener('DOMContentLoaded', function() {
    // 비디오 요소를 가져옵니다.
    const video = document.querySelector('.video_drop');

    // 비디오가 재생 중인지 여부를 추적하는 변수를 설정합니다.
    let isPlaying = false;

    // 스크롤 이벤트를 감지합니다.
    window.addEventListener('scroll', () => {
        // 비디오 요소의 현재 화면에 대한 상단 위치를 가져옵니다.
        const videoTop = video.getBoundingClientRect().top;

        // 비디오가 화면에 보이면서 재생 중이 아닌 경우, 비디오를 재생합니다.
        if (videoTop < window.innerHeight && videoTop > -video.clientHeight && !isPlaying) {
            video.play();
            isPlaying = true;
        }

        // 비디오가 화면에서 보이지 않는 경우, 비디오를 일시 정지하고 처음부터 재생 가능하도록 변수를 재설정합니다.
        if (videoTop > window.innerHeight || videoTop < -video.clientHeight) {
            video.pause();
            video.currentTime = 0;
            isPlaying = false;
        }
    });
});

//section8

// jQuery 로드 여부 확인
if (typeof jQuery == 'undefined') {
    console.error('jQuery is not loaded.');
} else {
    // jQuery가 로드된 경우
    jQuery(document).ready(function ($) {
        $(window).scroll(function () {
            const scrollTop = $(window).scrollTop();
            const textArea = $('.content8');
            const textTop = textArea.offset().top;
            const textHeight = textArea.height();
            const textBottom = textTop + textHeight - 500;
            const fixed = $('.fixed3');


            const position = (scrollTop - textTop + 500) / textHeight;

            if (scrollTop >= textTop + 500 && scrollTop <= textBottom) {
                textArea.css('opacity', '1');
                fixed.addClass('active');
            } else if (scrollTop < textTop) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }

            if (scrollTop >= textBottom - 500) {
                textArea.css('opacity', '0');
                fixed.removeClass('active');
            }
        });
    });
}

