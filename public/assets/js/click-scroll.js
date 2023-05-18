//jquery-click-scroll
//by syamsul'isul' Arifin

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
        }, 300)
    });

});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});