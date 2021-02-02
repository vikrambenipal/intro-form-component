const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

console.log(firstName.placeholder);

// prevent page from submitting
form.addEventListener('submit', (e) => {
    let messages = [];
    if(firstName.value === '' || firstName.value == null){
        messages.push('Name is required');
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})