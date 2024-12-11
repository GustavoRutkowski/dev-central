import Users from '../models/users.js';

function tryLogin(user) {
    console.log(user);

    if (!validateEmail(user.email)) {
        alert('FORMATO DE EMAIL INVÁLIDO');
        return;
    };

    if (!validatePass(user.pass)) {
        alert('FORMATO DE SENHA INVÁLIDO');
        return;
    };

    loginUser(user);
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

async function loginUser(user) {
    const userLogged = await Users.login(user.email, user.pass);
    console.log(userLogged)

    if (userLogged.type === 'ERROR') {
        alert('USUÁRIO NÃO ENCONTRADO!');
        return null;
    }

    // localStorageHelper.setItem('user-logged', userLogged);
    location.href = '../index.html'
 
    return userLogged;
}

export default tryLogin;
