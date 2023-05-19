export const addSmoothScroll = ($) => {
    "use strict";
    // MENU
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();

        scrollToDiv(elWrapped,header_height);
        return false;

        function scrollToDiv(element,navheight){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });
};

export const clickScroll = ($) => {
    const sectionArray = [1, 2, 3, 4, 5, 6]
    $.each(sectionArray, function(index, value){

        $(document).scroll(function(){
            let offsetSection = $('#' + 'section_' + value).offset().top - 83;
            let docScroll = $(document).scrollTop();
            let docScroll1 = docScroll + 1;


            if ( docScroll1 >= offsetSection ){
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }

        });

        $('.click-scroll').eq(index).click(function(e){
            var offsetClick = $('#' + 'section_' + value).offset().top - 83;
            e.preventDefault();
            $('html, body').animate({
                'scrollTop':offsetClick
            }, 50)
        });

    });

    $(document).ready(function(){
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
        $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
    });
}