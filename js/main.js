document.addEventListener('DOMContentLoaded', function () {
/////////////////////////////////////////////////////MENU///////////////////////////////////////////////////////////////

var mainmenu = document.getElementsByClassName('main-menu')[0];

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= 500) {
            mainmenu.classList.add('main-menu-scroll');
            mainmenu.classList.remove('main-menu');
        }
        if (scrolled === 0) {
            mainmenu.classList.remove('main-menu-scroll');
            mainmenu.classList.add('main-menu');
        }
    };

    ////////////////////////////////////////////////CAROUSEL/////////////////////////////////////////////////////


            $('.carousel').slick({
            autoplay: true,
            arrows: true,
            pauseOnHover: false,
            autoplaySpeed: 5000,
            appendArrows: '.arrow',
            prevArrow: '<span class="slick-arrow slick-prev navigate"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-arrow slick-next navigate"><i class="fa fa-angle-right"></i></span>'
            });


////////////////////////////////////////////////////////TIMER///////////////////////////////////////////////////////////

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline ="January 01 2018 00:00:00 GMT+0300";
    var deadline = new Date(Date.parse(new Date()) + 65 * 8 * 30 * 43 * 1000); // for endless timer
    initializeClock('clockdiv', deadline);

///////////////////////////////////////////////////////LIGHTGALLARY///////////////////////////////////////////////////

        $("#lightgallery").lightGallery({
        selector: '.item'
    });








});