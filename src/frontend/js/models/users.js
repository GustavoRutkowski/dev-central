import localStorageHelper from "../modules/localStorage.js";

/*
    Estrutura dos Usuários:

    {
        id: 1,
        contacts: [...],
        name: 'Gustavo Rutkowski da Silva',
        description: 'Lorem Ipsum Dolor Sit Amet...',
        email: 'rutkowskigustavo@gmail.com',
        password: 'MyPassword1234',
        profile_picture: 'https://i.pinimg.com/736x/97/c9/5b/97c95b86e9beb7ca836a310ecd1996a9.jpg'
    }
*/
class Users {
    // CREATE

    static createUser({ name, description='', email, password, profile_picture='' }) {
        if (!name) {
            console.log('name is not defined.');
            throw new Error('name is not defined.');
        };

        if (!email) {
            console.log('email is not defined.');
            throw new Error('email is not defined.');
        };

        if (!password) {
            console.log('password is not defined.');
            throw new Error('password is not defined.');
        };
        
        const users = this.getUsers();
        
        const userCreated = {
            id: users.length,
            contacts: [],
            name,
            description,
            email,
            password,
            profile_picture,
        };

        users.push(userCreated);

        localStorageHelper.setItem('users', users);
        return users;
    };

    // READ

    static getUserById(id) {
        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        }

        if (typeof id !== 'number') {
            console.error('id is not a number.');
            throw new TypeError('id is not a number.');
        };
    
        const users = this.getUsers();
    
        // Procura pelo primeiro usuário que corresponde com o id.
        const foundUser = users.find(user => user.id === id);
        return foundUser || null;
    };

    static getUsers() {
        const users = localStorageHelper.getItem('users');
    
        return users || [];
    };

    // UPDATE

    static updateUser(id, { contacts=[], name, description='', email, password, profile_picture='' }) {
        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        };

        if (!name) {
            console.log('name is not defined.');
            throw new Error('name is not defined.');
        };

        if (!email) {
            console.log('email is not defined.');
            throw new Error('email is not defined.');
        };

        if (!password) {
            console.log('password is not defined.');
            throw new Error('password is not defined.');
        };
        
        const users = this.getUsers();

        const updatedUserInfos = {
            id,
            contacts,
            name,
            description,
            email,
            password,
            profile_picture,
        };

        // Procura pelo indíce do primeiro usuário que corresponda ao id
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) return null;

        users[userIndex] = updatedUserInfos;

        localStorageHelper.setItem('users', users);
        return users;
    };

    // Recebe um objeto somente com as informações que são relevantes para os contatos.
    static addContactToUser(idUser, { id, name, description='', profile_picture='' }) {
        if (!idUser) {
            console.log('idUser is not defined.');
            throw new Error('idUser is not defined.');
        };

        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        };

        if (!name) {
            console.log('name is not defined.');
            throw new Error('name is not defined.');
        };
        
        const user = this.getUserById(idUser);

        const contact = {
            id,
            name,
            description,
            profile_picture,
        };

        user.contacts.push(contact);

        this.updateUser(idUser, user);
        return user;
    };

    // DELETE

    static deleteUser(id) {
        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        };

        const users = this.getUsers();

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) return null;

        // Remove o usuário do array
        users.splice(userIndex, 1);

        localStorageHelper.setItem('users', users);
        return users;
    };
};
