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

// inputmask
// const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+1 (999) 999-9999');
// inputMask.mask(telSelector);

// const validation = new JustValidate('.form');

// validation
//   .addField('.input-name', [
//     {
//       rule: 'minLength',
//       value: 2,
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//     },
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Enter a First name!'
//     }
//   ])
//   .addField('.input-lastname', [
//     {
//       rule: 'minLength',
//       value: 2,
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//     },
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Enter a Last name!'
//     }
//   ])
//   .addField('.input-mail', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       value: true,
//       errorMessage: 'Enter a valid Email',
//     },
//   ])
//   .addField('.input-tel', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Phone is required',
//     },
//     {
//       rule: 'function',
//       validator: function() {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 10;
//       },
//       errorMessage: 'Enter the correct phone number',
//     },
//   ]).onSuccess((event) => {
//     console.log('Validation passes and form submitted', event);

//     let formData = new FormData(event.target);

//     console.log(...formData);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Send');
//         }
//       }
//     }

//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);

//     event.target.reset();
//   });