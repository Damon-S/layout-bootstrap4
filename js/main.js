$(function () {
    $('.button[filter]').click(function () {
        if ($(this).attr('filter') == 'all') {
            if ($(this).attr('val') == 'off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.portfolio__filter > div > div').show(300);
            }
        } else
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.portfolio__filter > div > div').hide(300);
            var filter = $(this).attr('filter');
            $('.portfolio__filter > div > div[filter=' + filter + ']').show(300);
        }
    });
    $('.slider-team').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

});