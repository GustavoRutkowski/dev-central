import Users from "./models/users.js";

const signUpForm = document.querySelector('#sign-up-form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passInput = document.querySelector('#pass-input');

signUpForm.addEventListener('submit', async e => {
    e.preventDefault();

    Users.createUser({
        name: nameInput.value,
        description: '',
        email: emailInput.value,
        password: passInput.value,
        profile_picture: ''
    });

    location.href = './login.html';






// O QUE EU FIZ

    // const res = await fetch("http://localhost/dev-central/src/backend/api/?path=/register", {
    //     method: 'POST',
    //     headers: new Headers().set('Content-Type', 'application/json'),
    //     body: JSON.stringify({username, email, pass})
    // });

    // const registerData = await res.json();
    // return registerData || [];

});
