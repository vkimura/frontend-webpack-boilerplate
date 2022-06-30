import '../scss/nexus.scss';

// Language: javascript
// Path: src\js\nexus.js
//# sourceMappingURL=nexus.js.map

//Toggles the icon sidebar menu on hover over hamburger icon
$('.gn-icon-menu').hover(function() {
    $('.gn-menu-wrapper').toggleClass('gn-open-part');
});

//Expands the main sidebar menu on hover over sidebar icons
$('.gn-menu-wrapper').hover(function() {
    $(this).toggleClass('gn-open-all');
});

// $('.gn-icon-download').hover(function() {
//     // $(this).closest("ul").find('gn-submenu').toggleClass('gn-open-sub');
//     $('.gn-submenu').toggleClass('gn-open-sub');
// });

$(document).ready(function() {
    $('.gn-menu > li.have-children a').click(function(e) {
        e.preventDefault();

        if (!$(this).parent().hasClass('active')) { //if the parent <li> is not active
            $('.gn-menu li ul').slideUp(); // Close all other submenus
            $(this).next().slideToggle(); // Open the submenu
            $('.gn-menu li').removeClass('active'); // Remove all active classes
            $(this).parent().addClass('active'); // Add active class to the parent li
        } else {
            $('.gn-menu li ul').slideToggle(); // Close all other submenus
            $('.gn-menu li').removeClass('active'); // Remove all active classes
        }
    });
});