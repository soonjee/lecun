$(function () {

    $('.Header').on({
        mouseenter: function () {
            $(this).addClass('on');
        },
        mouseleave: function () {
            $(this).removeClass('on');
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