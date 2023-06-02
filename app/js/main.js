const burgerMenu = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-active');
    burgerContainer.classList.toggle('header__burger-container--active');
    nav.classList.toggle('header__nav-active');
});

// Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
// Fancybox.bind("[data-fancybox]", {
//     autoFocus: false,
//     dragToClose: false,
//     groupAttr: false
// });

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