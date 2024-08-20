import localStorageHelper from './localStorage.js';

function tryLogin(user, users) {
    if (!validateEmail(user.email)) {
        alert('FORMATO DE EMAIL INVÁLIDO');
        return;
    };

    if (!validatePass(user.pass)) {
        alert('FORMATO DE SENHA INVÁLIDO');
        return;
    };

    loginUser(user, users);
};

function validateEmail(email) {
    if (!email) return false;

    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailFormat.test(email);
};

function validatePass(pass) {
    if (!pass) return false;
    if (pass.length < 8) return false; 

    return true;
};

function loginUser(user, users) {
    const userLogged = users.find(e => {
        const emailFounded = e.email === user.email;
        const passFounded = e.pass === user.password;

        return emailFounded && passFounded;
    });

    if (!userLogged) {
        alert('USUÁRIO NÃO ENCONTRADO!!')
        return null;
    };

    localStorageHelper.setItem('user-logged', userLogged);
    location.href = '../index.html'
 
    return userLogged;
};

export default tryLogin;
