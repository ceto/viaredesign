import $ from 'jquery';
import 'what-input';
import 'slick-carousel';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
import 'foundation-sites';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';


$(document).foundation();


$('.js-sidebartoggler').on('click', function(e) {
    $('.offcanvas').toggleClass('sidebar-is-open');
});

$('.mobilenavpanel__close').on('click', function(e) {
    $('.offcanvas').removeClass('sidebar-is-open');
});


$('.js-startvquoteform').on('click', function(event) {
    $(this).closest('.vcard').addClass('is-open');
    $('#' + $(this).attr('data-ctarget')).slick('slickNext');
});
$('.js-closevquoteform').on('click', function(event) {
    $(this).closest('li').find('.vcard').removeClass('is-open');
    $('#' + $(this).attr('data-ctarget')).slick('slickPrev');
});


$(document).ready(function(){
    $('.sidemenu > li').each( function(index) {
        if ( $(this).find('ul').length > 0) {
            $(this).addClass('has-submenu');
        }
    });
});

$('.sidemenu > li > a').on('click', function(e) {
    $('.sidemenu > li').removeClass('is-active');
    $(this).closest('li').addClass('is-active');
    if ( $(this).closest('li').find('ul').length > 0) {
        e.preventDefault();
        $(this).closest('.sidemenu').addClass('is-open');
    }
});

$('.js-closesidemenu').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.sidemenu').removeClass('is-open');
    // $(this).closest('.sidemenu > li').removeClass('is-active');
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
        touchMove: false,
        swipe: false,
        // fade: true,
});

const $swipegallery = $('.swipegallery');
$swipegallery
    .on("init", function (event, slick) {
    })
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    })
    .on('afterChange', function (event, slick, currentSlide) {
    })
    .slick({
        arrows: true,
        // dots: true,
        // prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="#icon-caret-left"></use></svg></button>',
        // nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="#icon-caret-right"></use></svg></button>',
        // appendArrows: '.carouselwrap',
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        // fade: true,
});



