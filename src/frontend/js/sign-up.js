import Users from "./models/users.js";

const signUpForm = document.querySelector('#sign-up-form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passInput = document.querySelector('#pass-input');

signUpForm.addEventListener('submit', e => {
    e.preventDefault();

    Users.createUser({
        name: nameInput.value,
        description: '',
        email: emailInput.value,
        password: passInput.value,
        profile_picture: ''
    });

    location.href = './login.html';
});
