// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+1 (999) 999-9999');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter a First name'
    }
  ])
  .addField('.input-lastname', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter a Last name'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter a valid Email',
    },
  ])
  .addField('.input-location', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter a location'
    }
  ])
  .addField('.input-hear', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 75,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Type in where you heard about me.'
    }
  ])
  .addField('.input-guests', [
    {
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 150,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter the number of guests (if you will be alone, enter the number 1)'
    }
  ])
  .addField('.textarea-place', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 75,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter the place in the world you would like to visit'
    }
  ])
  .addField('.textarea-tradition', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 100,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter family traditions that you cherish'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Phone is required',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Enter the correct phone number',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Send');
          alert("Thank you, your application has been sent")
        }
      }
    }

    xhr.open('POST', '../mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });