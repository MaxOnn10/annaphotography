const burgerMenu = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav');
const storiesLink = document.querySelector('.header__menu-stories');
const submenu = document.querySelector('.header__nav-submenu');

// Burger
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-active');
    burgerContainer.classList.toggle('header__burger-container--active');
    nav.classList.toggle('header__nav-active');
    submenu.classList.remove('submenu-visible'); // Close submenu on burgerMenu click
  });
  
  // Stories nav menu
  storiesLink.addEventListener('click', (event) => {
    event.preventDefault();
    submenu.classList.toggle('submenu-visible'); // Toggle submenu visibility
  });


// Close submenu on burgerMenu click
// burgerMenu.addEventListener('click', () => {
//   submenu.style.visibility = 'hidden';
//   submenu.style.opacity = '0';
//   submenu.style.transform = 'rotateX(-90deg)';
// });

//download-lock
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
});