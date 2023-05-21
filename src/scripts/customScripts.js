export const addSmoothScroll = ($) => {
    "use strict";
    // MENU
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
        let el = $(this).attr('href');
        let elWrapped = $(el);
        let header_height = $('.navbar').height();

        scrollToDiv(elWrapped,header_height);
        return false;

        function scrollToDiv(element,navheight){
            let offset = element.offset();
            let offsetTop = offset.top;
            let totalScroll = offsetTop-navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });
};

export const clickScroll = ($) => {
    const sectionArray = [1, 2, 3, 4, 5, 6];

    $.each(sectionArray, function(index, value) {
        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        const offsetSection = isMobile ? $('#' + 'section_' + value).offset().top - 350 : $('#' + 'section_' + value).offset().top - 30;

        $(document).scroll(function() {
            const docScroll = $(document).scrollTop();
            const docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }
        });

        $('.click-scroll').eq(index).click(function(e) {
            const offsetClick = isMobile ? $('#' + 'section_' + value).offset().top - 350 : $('#' + 'section_' + value).offset().top - 30;
            e.preventDefault();
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 50);
        });
    });

    $(document).ready(function() {
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
        $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
    });
};

// export const initializeStickyNavbar = ($) => {
//     (function ($) {
//         let slice = Array.prototype.slice; // save ref to original slice()
//         let splice = Array.prototype.splice; // save ref to original splice()
//
//         let defaults = {
//             topSpacing: 0,
//             bottomSpacing: 0,
//             className: 'is-sticky',
//             wrapperClassName: 'sticky-wrapper',
//             center: false,
//             getWidthFrom: '',
//             widthFromWrapper: true,
//             responsiveWidth: false
//         };
//
//         let $window = $(window);
//         let $document = $(document);
//         let sticked = [];
//         let windowHeight = $window.height();
//
//         let scroller = function () {
//             let scrollTop = $window.scrollTop();
//             let documentHeight = $document.height();
//             let dwh = documentHeight - windowHeight;
//             let extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
//
//             for (let i = 0; i < sticked.length; i++) {
//                 let s = sticked[i];
//                 let elementTop = s.stickyWrapper.offset().top;
//                 let etse = elementTop - s.topSpacing - extra;
//
//                 //update height in case of dynamic content
//                 s.stickyWrapper.css('height', s.stickyElement.outerHeight());
//
//                 if (scrollTop <= etse) {
//                     if (s.currentTop !== null) {
//                         s.stickyElement
//                             .css({
//                                 'width': '',
//                                 'position': '',
//                                 'top': ''
//                             });
//                         s.stickyElement.parent().removeClass(s.className);
//                         s.stickyElement.trigger('sticky-end', [s]);
//                         s.currentTop = null;
//                     }
//                 } else {
//                     let newTop = documentHeight - s.stickyElement.outerHeight()
//                         - s.topSpacing - s.bottomSpacing - scrollTop - extra;
//                     if (newTop < 0) {
//                         newTop = newTop + s.topSpacing;
//                     } else {
//                         newTop = s.topSpacing;
//                     }
//                     if (s.currentTop != newTop) {
//                         let newWidth;
//                         if (s.getWidthFrom) {
//                             newWidth = $(s.getWidthFrom).width() || null;
//                         } else if (s.widthFromWrapper) {
//                             newWidth = s.stickyWrapper.width();
//                         }
//                         if (newWidth == null) {
//                             newWidth = s.stickyElement.width();
//                         }
//                         s.stickyElement
//                             .css('width', newWidth)
//                             .css('position', 'fixed')
//                             .css('top', newTop);
//
//                         s.stickyElement.parent().addClass(s.className);
//
//                         if (s.currentTop === null) {
//                             s.stickyElement.trigger('sticky-start', [s]);
//                         } else {
//                             // sticky is started but it has to be repositioned
//                             s.stickyElement.trigger('sticky-update', [s]);
//                         }
//
//                         if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
//                             // just reached bottom || just started to stick but bottom is already reached
//                             s.stickyElement.trigger('sticky-bottom-reached', [s]);
//                         } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
//                             // sticky is started && sticked at topSpacing && overflowing from top just finished
//                             s.stickyElement.trigger('sticky-bottom-unreached', [s]);
//                         }
//
//                         s.currentTop = newTop;
//                     }
//                 }
//             }
//         };
//
//         let resizer = function () {
//             windowHeight = $window.height();
//
//             for (let i = 0; i < sticked.length; i++) {
//                 let s = sticked[i];
//                 let newWidth = null;
//                 if (s.getWidthFrom) {
//                     if (s.responsiveWidth === true) {
//                         newWidth = $(s.getWidthFrom).width();
//                     }
//                 } else if (s.widthFromWrapper) {
//                     newWidth = s.stickyWrapper.width();
//                 }
//                 if (newWidth != null) {
//                     s.stickyElement.css('width', newWidth);
//                 }
//             }
//         };
//
//         let methods = {
//             init: function (options) {
//                 let o = $.extend({}, defaults, options);
//                 return this.each(function () {
//                     let stickyElement = $(this);
//                     let stickyId = stickyElement.attr('id');
//                     let stickyHeight = stickyElement.outerHeight();
//                     let wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
//                     let wrapper = $('<div></div>')
//                         .attr('id', wrapperId)
//                         .addClass(o.wrapperClassName);
//
//                     stickyElement.wrapAll(wrapper);
//
//                     let stickyWrapper = stickyElement.parent();
//
//                     if (o.center) {
//                         stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: 'auto', marginRight: 'auto' });
//                     }
//
//                     if (stickyElement.css('float') === 'right') {
//                         stickyElement.css({ 'float': 'none' }).parent().css({ 'float': 'right' });
//                     }
//
//                     stickyWrapper.css('height', stickyHeight);
//
//                     o.stickyElement = stickyElement;
//                     o.stickyWrapper = stickyWrapper;
//                     o.currentTop = null;
//
//                     sticked.push(o);
//                 });
//             },
//             update: scroller,
//             unstick: function (options) {
//                 return this.each(function () {
//                     let that = this;
//                     let unstickyElement = $(that);
//
//                     let removeIdx = -1;
//                     let i = sticked.length;
//                     while (i-- > 0) {
//                         if (sticked[i].stickyElement.get(0) === that) {
//                             splice.call(sticked, i, 1);
//                             removeIdx = i;
//                         }
//                     }
//                     if (removeIdx != -1) {
//                         unstickyElement.unwrap();
//                         unstickyElement
//                             .css({
//                                 'width': '',
//                                 'position': '',
//                                 'top': '',
//                                 'float': ''
//                             });
//                     }
//                 });
//             }
//         };
//
//         // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
//         if (window.addEventListener) {
//             window.addEventListener('scroll', scroller, false);
//             window.addEventListener('resize', resizer, false);
//         } else if (window.attachEvent) {
//             window.attachEvent('onscroll', scroller);
//             window.attachEvent('onresize', resizer);
//         }
//
//         $.fn.sticky = function (method) {
//             if (methods[method]) {
//                 return methods[method].apply(this, slice.call(arguments, 1));
//             } else if (typeof method === 'object' || !method) {
//                 return methods.init.apply(this, arguments);
//             } else {
//                 $.error('Method ' + method + ' does not exist on jQuery.sticky');
//             }
//         };
//
//         $.fn.unstick = function (method) {
//             if (methods[method]) {
//                 return methods[method].apply(this, slice.call(arguments, 1));
//             } else if (typeof method === 'object' || !method) {
//                 return methods.unstick.apply(this, arguments);
//             } else {
//                 $.error('Method ' + method + ' does not exist on jQuery.sticky');
//             }
//         };
//
//         $(function () {
//             setTimeout(scroller, 0);
//         });
//
//         $(document).ready(function () {
//             $(".navbar").sticky({ topSpacing: 0 });
//         });
//         // eslint-disable-next-line no-undef
//     })(jQuery);
// };
