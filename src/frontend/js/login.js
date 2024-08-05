import validateLogin from "./modules/validate-login.js";

const users = [
    {
        email: 'adoadotueviado@gmail.com',
        pass: 'banana123'
    },
    {
        email: 'carroaalho@gmail.com',
        pass: '12345678'
    }
];

const inputEmail = document.querySelector("#email-input");
const inputPass = document.querySelector("#pass-input");
const loginButton = document.querySelector(".login-box__login-btn");

const userTentactive = {
    email: null,
    pass: null
};

loginButton.addEventListener("submit", e => { 
    e.preventDefault();
});

loginButton.addEventListener("click", event => {
    event.preventDefault();

    userTentactive.email = inputEmail.value;
    userTentactive.pass = inputPass.value;
    //console.log(userTentactive);

    //console.log(users);

    validateLogin(userTentactive, users);
});
