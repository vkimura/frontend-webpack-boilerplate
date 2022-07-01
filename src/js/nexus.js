import '../scss/nexus.scss';

// Language: javascript
// Path: src\js\nexus.js
//# sourceMappingURL=nexus.js.map
//ref: https://codepen.io/ivan_antic/pen/yVQKpm - Sidebar menu with icons and dropdown menu with animation
//ref: https://codepen.io/illnino/pen/nwPBrQ - Google Nexus Website Menu

//Toggles the icon sidebar menu on hover over hamburger icon
$('.gn-icon-menu').hover(function() {
    $('.gn-menu-wrapper').toggleClass('gn-open-part');
});

//DONE: use window.navigator.maxTouchPoints = 1 for mobile detection, window.navigator.maxTouchPoints = 0 for desktop

//Expands the main sidebar menu on hover over sidebar icons
if (window.navigator.maxTouchPoints >= 1) { //mobile
    $('.gn-menu-wrapper').hover(function() {
        $(this).toggleClass('gn-open-all');
    });
} else { //desktop browser
    $('.gn-menu-wrapper').click(function() {
        $(this).toggleClass('gn-open-all');
    });
}

// $('.gn-icon-download').hover(function() {
//     // $(this).closest("ul").find('gn-submenu').toggleClass('gn-open-sub');
//     $('.gn-submenu').toggleClass('gn-open-sub');
// });

$(document).ready(function() {
    $('.gn-menu > li.have-children a').click(function(e) {
        e.preventDefault();

        if (!$(this).parent().hasClass('active')) { //if the parent <li> is not active
            $('.gn-menu li ul').slideUp(); // Close all other submenus
            // $(this).next().slideToggle(); // Open the submenu
            $(this).next().slideDown(); // Open the submenu
            $('.gn-menu li').removeClass('active'); // Remove all active classes
            $(this).parent().addClass('active'); // Add active class to the parent li
        } else {
            // $('.gn-menu li ul').slideToggle(); // Close all other submenus
            $('.gn-menu li ul').slideUp(); // Close all other submenus
            $('.gn-menu li').removeClass('active'); // Remove all active classes
        }
    });
});