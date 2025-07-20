const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postalInput = document.querySelector('#postal');



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

            console.log( !isNaN (postal.value));
            if ( isNaN (postal.value)){
                document.getElementById('postal-error').textContent = "Please insert four digits (e.g. 1234)";
            } else if (postal.value !== ''){
                document.getElementById('postal-error').textContent = "Please insert your postal";
            } else document.getElementById('postal-error').textContent = "";
        })
    }

    return {
        checkEmail,
        checkCountry,
        checkPostal

    }
}

formValidation().checkEmail(emailInput);
formValidation().checkCountry(countryInput);
formValidation().checkPostal(postalInput);

