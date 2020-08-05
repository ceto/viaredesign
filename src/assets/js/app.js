import $ from 'jquery';
import 'what-input';
import 'slick-carousel';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$('.js-sidebartoggler').on('click', function(e) {
    $('html').toggleClass('sidebar-is-open');
});

$('.js-sidebarclose').on('click', function(e) {
    $('html').removeClass('sidebar-is-open');
});


$('.vcard .js-startform').on('click', function(event) {
    $(this).closest('.vcard').toggleClass('is-open');
});


const $vcardcarousel = $('.vcardcarousel');
$vcardcarousel
    .on("init", function (event, slick) {
    })
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(slick).closest('.vcard').toggleClass('is-open');
    })
    .on('afterChange', function (event, slick, currentSlide) {
    })
    .slick({
        arrows: false,
        dots: false,
        // prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="#icon-caret-left"></use></svg></button>',
        // nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="#icon-caret-right"></use></svg></button>',
        // appendArrows: '.carouselwrap',
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        // fade: true,


    });