const burgerMenu = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-active');
    burgerContainer.classList.toggle('header__burger-container--active');
    nav.classList.toggle('header__nav-active');
});