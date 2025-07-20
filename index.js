const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postalInput = document.querySelector('#postal');
const passwordInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('button');


function formValidation (){

    const validationState = {
        email: false,
        country: false,
        postal: false,
        password: false,
        confirmPass: false,
    }
    const checkEmail = (email) => {
        email.addEventListener ('input', () => {
            if (email.value !== '' && !email.value.includes('@') || !email.value.includes('.')){
                document.getElementById('email-error').textContent = "email is invalid";
                validationState.email = false;
                console.log(validationState.email);
            } else {
                validationState.email = true;
                console.log(validationState.email);
                document.getElementById('email-error').textContent = "";
            }
        })
    }
    const checkCountry = (country) => {
        country.addEventListener ('input', () => {
            if (country.value === 'Select Country'){
                document.getElementById('country-error').textContent = "Please select country";
                validationState.country = false;
            } else {
                document.getElementById('country-error').textContent = "";
                validationState.country = true;
            }
        })
    }

    const checkPostal = (postal) => {
        postal.addEventListener ('input', () => {
            if ( !Number(postal.value)){
                document.getElementById('postal-error').textContent = "Please insert four digits (e.g. 1234)";
                validationState.postal = false;
            } else if (postal.value === ''){
                document.getElementById('postal-error').textContent = "Please insert your postal";
                validationState.postal = false;
            } else {
                document.getElementById('postal-error').textContent = "";
                validationState.postal = true;
            }

        })
    }

    const checkPassword = (password) => {
        password.addEventListener ('input', () => {
            if (password.value.length < 10){
                document.getElementById('password-error').textContent = "Password must be 10 characters long";
                validationState.password = false;
            } else {
                document.getElementById('password-error').textContent = "";
                validationState.password = true; // ✅ ADD THIS
            }
        })
    }


    const checkConfirmPassword = (password, confirmPass) => {
        confirmPass.addEventListener ('input', () => {
            if (confirmPass.value !== password.value){
                document.getElementById('confirm-password-error').textContent = "Password does not match";
                validationState.confirmPass = false;
            } else {
                document.getElementById('confirm-password-error').textContent = "";
                validationState.confirmPass = true;
            }
        })
    }

    const checkFormValidity = (submitBtn) => {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (validationState.email === false || validationState.country === false || validationState.postal === false
                || validationState.password === false || validationState.confirmPass === false
            ){
                console.log(validationState.email);
                alert('please fill up all the details correctly');
            } else alert ('form submitted!');
            
        })
    }
    
    return {
        checkEmail,
        checkCountry,
        checkPostal,
        checkPassword,
        checkConfirmPassword,
        checkFormValidity
    }
}

const validator = formValidation();

validator.checkEmail(emailInput);
validator.checkCountry(countryInput);
validator.checkPostal(postalInput);
validator.checkPassword(passwordInput);
validator.checkConfirmPassword(passwordInput, confirmPassInput);
validator.checkFormValidity(submitBtn);




