$(function () {

    $('.Header').on({
        mouseenter: function () {
            $(this).addClass('on');
        },
        mouseleave: function () {
            $(this).removeClass('on');
        }

    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        // console.log(sct);
        if (sct > 700) {
            $('.Header').addClass('on');
        } else {
            $('.Header').removeClass('on')
        }
    });

    $('.IntroSilder').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on')
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }

        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });


    $('.IntroSilder').slick({
        dots: false,
        arrows: false,
        // autoplay: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    })

    // section01_Intro




    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.IntroSilder').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.IntroSilder').slick('slickNext')
    });


    $('.IntroSilder').on('afterChange', function (e, s, c) {
        let t = c % 3;

        $('.IntroBottom .bar span').css({
            left: t * 33.3333333333 + '%'
        });

    })


    //section04_MenuWrap

    $('.MWSilder').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 4,
        centerMode: true,
        variableWidth: true,

        customPaging: function (slider, i) {
            console.log($(slider.$slides[i]).html());
            return '<button class="tab">' + $(slider.$slides[i]).attr('data-dot-title') + '</button>';
        },

        // MWSilder__init();
        //https://codepen.io/kimyangsun/pen/QWbLZGy
    })


    $('.MenuArrow i:nth-child(1)').on('click', function () {
        $('.MWSilder').slick('slickPrev')
    });
    $('.MenuArrow i:nth-child(2)').on('click', function () {
        $('.MWSilder').slick('slickNext')
    });


    // $('.MWSilder').slick({
    //     customPaging: function(slider, i) { 
    //         console.log($(slider.$slides[i]).html());
    //         return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
    //     },
    // });

})