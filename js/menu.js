const menuButton = document.querySelector('.menu__burger');
const closeButton = document.querySelector('.menu__close');
const links = document.querySelectorAll('.menu__link');
const navSection = document.querySelector('.menu__nav');

function openMenu() {
    navSection.classList.add('menu__nav--transition');
    navSection.classList.add('menu__nav--visible');
}

function closeMenu() {
    navSection.classList.remove('menu__nav--visible');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
links.forEach((link) => link.addEventListener('click', closeMenu));
