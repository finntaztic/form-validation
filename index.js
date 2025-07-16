

function validateForm (){
    const email = document.querySelector('#email');
    console.log(email);
    const emailErr = document.getElementById('email-error');

    // emailErr.textContent = '';
    isValid = true;

    email.addEventListener('input', () => {
        if (email.value !== '' && !email.value.includes('@') || !email.value.includes('.')){
            emailErr.textContent = 'Please enter valid email address';
            isValid = false;
            email.classList.add ('alert');
        } else {
            emailErr.textContent = '';
            email.classList.remove ('alert')
        }
    })

}
validateForm();