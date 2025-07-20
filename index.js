const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postalInput = document.querySelector('#postal');
const passwordInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirm-password')


function formValidation (){
    const checkEmail = (email) => {
        email.addEventListener ('input', () => {
            if (email.value !== '' && !email.value.includes('@') || !email.value.includes('.')){
                document.getElementById('email-error').textContent = "email is invalid";
            } else document.getElementById('email-error').textContent = "";
        })
    }
    const checkCountry = (country) => {
        country.addEventListener ('input', () => {
            if (country.value === 'Select Country'){
                document.getElementById('country-error').textContent = "Please select country";
            } else document.getElementById('country-error').textContent = "";
        })
    }

    const checkPostal = (postal) => {
        postal.addEventListener ('input', () => {
            if ( !Number(postal.value)){
                document.getElementById('postal-error').textContent = "Please insert four digits (e.g. 1234)";
            } else if (postal.value === ''){
                document.getElementById('postal-error').textContent = "Please insert your postal";
            } else document.getElementById('postal-error').textContent = "";
        })
    }

    const checkPassword = (password) => {
        password.addEventListener ('input', () => {
            if (password.value.length < 10){
                document.getElementById('password-error').textContent = "Password must be 10 characters long";
            } else document.getElementById('password-error').textContent = "";
        })
    }


    const checkConfirmPassword = (password, confirmPass) => {
        confirmPass.addEventListener ('input', () => {
            if (confirmPass.value !== password.value){
                document.getElementById('confirm-password-error').textContent = "Password does not match";
            } else document.getElementById('confirm-password-error').textContent = "";
        })
    }
    return {
        checkEmail,
        checkCountry,
        checkPostal,
        checkPassword,
        checkConfirmPassword
    }
}

formValidation().checkEmail(emailInput);
formValidation().checkCountry(countryInput);
formValidation().checkPostal(postalInput);
formValidation().checkPassword(passwordInput);
formValidation().checkConfirmPassword(passwordInput, confirmPassInput);



