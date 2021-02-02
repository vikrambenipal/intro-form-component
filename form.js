const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const fnError = document.getElementById('fn-error');
const lnError = document.getElementById('ln-error');
const emError = document.getElementById('em-error');
const pwError = document.getElementById('pw-error');

console.log(firstName.placeholder);

// prevent page from submitting
form.addEventListener('submit', (e) => {

    if(firstName.value === '' || firstName.value == null){
        e.preventDefault();
        fnError.innerText = "First Name cannot be empty";
    }
    if(lastName.value === '' || lastName.value == null){
        e.preventDefault();
        lnError.innerText = "Last Name cannot be empty";
    }
    if(email.value === '' || email.value == null){
        e.preventDefault();
        emError.innerText = "Looks like this is not an email";
    }
    if(password.value === '' || password.value == null){
        e.preventDefault();
        pwError.innerText = "Password cannot be empty";
    }
})