
// const email = document.querySelector('#email');
// const emailErr = document.getElementById('email-error');

// const country = document.querySelector('#country');
// const countryErr = document.querySelector('#country-error');


// function validateForm (){

//     //validates email
//     email.addEventListener('input', () => {
//         if (email.value !== '' && !email.value.includes('@') || !email.value.includes('.')){
//             emailErr.textContent = 'Please enter valid email address';
//             email.classList.add ('alert');
//         } else {
//             emailErr.textContent = '';
//             email.classList.remove ('alert')
//         }
//     })

//     //validates country


// }
// validateForm();

// //click submit btn, validate email by asking the classlist

// const submitBtn = document.querySelector('button');
// console.log(submitBtn);

// submitBtn.addEventListener ('click', (e) => {
//     e.preventDefault();
//     if (email.classList.contains('alert') || email.value === '' ){
//         console.log('cant submit');
//     } else if (country.value === 'Select Country'){
//         console.log('insert country');
//     }
// })

const email = 'ksflskjf';
const emailErr = 'email invalid'

function formValidation (){
    const checkEmail = (email, emailErr) => {
        if (email !== '' && !email.includes('@') || !email.includes('.')){
            console.log(emailErr);
        }
    }
    return {
        checkEmail
    }
}

formValidation().checkEmail(email, emailErr);


