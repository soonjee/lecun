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



    // $('.Header').off('mouseenter mouseleave');



    $('.IntroSilder').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    })

    $('.MWSilder').slick({
        dots: true,
        arrows: true,
    })

})