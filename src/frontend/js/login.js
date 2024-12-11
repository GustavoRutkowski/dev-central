import Users from "./models/users.js";
import tryLogin from "./modules/validate-login.js";

const loginForm = document.querySelector('.login-box__form');
const inputEmail = document.querySelector("#email-input");
const inputPass = document.querySelector("#pass-input");

loginForm.addEventListener("submit", e => { 
    e.preventDefault();

    const userTentactive = {
        email: inputEmail.value,
        pass: inputPass.value
    };

    tryLogin(userTentactive);
});
