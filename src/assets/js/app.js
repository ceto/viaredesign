import $ from 'jquery';
import 'what-input';

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


$('.vcard [data-tabs-target]').on('click', function(event) {
    $('#' + $(this).attr('data-tabs-target')).addClass('is-active'); 
    $(this).closest('.tabs-panel').removeClass('is-active');
    $(this).closest('.vcard').toggleClass('is-open');
});
