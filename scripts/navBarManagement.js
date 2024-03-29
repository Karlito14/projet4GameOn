import { Navbar } from './classes/navbar.js';

const iconNavbar = document.querySelector('#icon');
const mainNavbar = document.querySelector('#main-navbar');
const topNav = document.getElementById('myTopnav');

// Open or close the navigation
iconNavbar.addEventListener('click', editNav);

function editNav(event) {
    event.stopPropagation();
    if (topNav.className === 'topnav') {
        Navbar.openNavbar(topNav, mainNavbar, iconNavbar);
    } else {
        Navbar.closeNavbar(topNav, mainNavbar, iconNavbar);
    }
}

// close navbar by scroll
window.addEventListener('scroll', () => {
    if(topNav.className.includes('responsive')) {
        Navbar.closeNavbar(topNav, mainNavbar, iconNavbar);
    }
});

// close the navbar by click outside 
window.addEventListener('click', () => {
    if(topNav.className.includes('responsive')) {
        Navbar.closeNavbar(topNav, mainNavbar, iconNavbar);
    }
});