const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const fnError = document.getElementById('fn-error');
const lnError = document.getElementById('ln-error');
const emError = document.getElementById('em-error');
const pwError = document.getElementById('pw-error');

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

form.addEventListener('submit', (e) => {
    // prevent page from submitting
    e.preventDefault();
    CheckError(firstName, fnError);
    CheckError(lastName, lnError);
    CheckError(password, pwError);
    CheckError(email, emError);
})

function CheckError(input, error){
    const placeholder = input.placeholder;
    
    if((input.value == '' || input.value == null)){
        if(placeholder == "Email Address"){
            error.innerText = "Looks like this is not an email";
            input.classList.add('error-style');
        }else{
            error.innerText = placeholder + " cannot be empty";
            input.classList.add('error-style');
        }
    }else{
        input.classList.remove('error-style');
        error.innerText = '';
    }      
}