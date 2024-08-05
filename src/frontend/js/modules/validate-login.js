function validateLogin(user, users) {
    if (!validateEmail(user.email)) return;
    if (!validatePass(user.pass)) return;

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
    let isLogged = false;

    users.forEach(element => {
        // console.log(element);
        // console.log(user);

        if (element.email === user.email && element.pass === user.pass) {
            alert("logado meu cria");
            isLogged = true;
        };
    });

    if (!isLogged) {
        alert("Errou meu parceiro, BANIDO!!!");
    };

    return isLogged;
}
    

export default validateLogin;