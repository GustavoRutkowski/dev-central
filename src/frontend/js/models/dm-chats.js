import localStorageHelper from "../modules/localStorage.js";

/*
    Estrutura dos Chats DM:

    {
        id: 1,
        users: [
            {
                id: 1,
                name: 'Gustavo Rutkowski da Silva',
                profile_picture: 'https://i.pinimg.com/736x/97/c9/5b/97c95b86e9beb7ca836a310ecd1996a9.jpg'
            },
            {
                id: 2,
                name: 'Felipi Haag Machado',
                profile_picture: 'https://i.pinimg.com/736x/97/c9/5b/97c95b86e9beb7ca836a310ecd1996a9.jpg'
            }
        ],
        messages: [
            {
                id: 1,
                body: 'Lorem Ipsum Dolor Sit Amet...',
                time_stamp: '18/08/2024',
                author: {
                    id: 1,
                    name: 'Gustavo Rutkowski da Silva',
                    profile_picture: 'https://i.pinimg.com/736x/97/c9/5b/97c95b86e9beb7ca836a310ecd1996a9.jpg'
                },
            },
            ...
        ],
    }
*/

// Adicionar as mensagens
class DMChats {
    constructor() {
        this.key = 'dm-chats';
    };

    // CREATE
 
    static createChat(user1, user2) {
        if (!user1) {
            console.log('user1 is not defined.');
            throw new Error('user1 is not defined.');
        };

        if (!user2) {
            console.log('user2 is not defined.');
            throw new Error('user2 is not defined.');
        };

        const chats = this.getChats();

        const chat = {
            id: chats.length,
            users: [ user1, user2 ],
            messages: [],
        };

        chats.push(chat);

        localStorageHelper.setItem(this.key, chats);
        return chats;
    };

    // READ

    static getChatById(id) {
        if (!id) {
            console.error('id is not defined.');
            throw new Error('id is not defined.');
        };

        const chats = this.getChats();

        const foundChat = chats.find(chat => chat.id === id);
        return foundChat || null;
    };

    static getChatByUsersId(id1, id2) {
        if (!id1) {
            console.error('id1 is not defined.');
            throw new Error('id1 is not defined.');
        };

        if (!id2) {
            console.error('id2 is not defined.');
            throw new Error('id2 is not defined.');
        };

        const chats = this.getChats();

        const foundChat = chats.find(chat => {
            const usersIds = chat.users.map(user => user.id);
            const user1Founded = usersIds.includes(id1);
            const user2Founded = usersIds.includes(id2);

            return user1Founded && user2Founded;
        });

        return foundChat || null;
    };

    static getChats() {
        const chats = localStorageHelper.getItem(this.key);
    
        return chats || [];
    };

    // UPDATE

    static updateChat(id, { users = [], messages=[] }) {
        if (!id) {
            console.error('id is not defined.');
            throw new Error('id is not defined.');
        };

        if (!users[0]) {
            console.error('users[0] is not defined.');
            throw new Error('users[0] is not defined.');
        };

        if (!users[1]) {
            console.error('users[1] is not defined.');
            throw new Error('users[1] is not defined.');
        };

        const chats = this.getChats();

        const updatedChatInfos = {
            id,
            users,
            messages,
        };

        const chatIndex = chats.findIndex(chat => chat.id === id);

        if (chatIndex === -1) return null;

        chats[chatIndex] = updatedChatInfos;

        localStorageHelper.setItem(this.key, chats);
        return chats;
    };

    static addMessageToChat(idChat, { id, body, time_stamp, author }) {
        if (!idChat) {
            console.log('idChat is not defined.');
            throw new Error('idChat is not defined.');
        };

        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        };

        if (!time_stamp) {
            console.log('time_stamp is not defined.');
            throw new Error('time_stamp is not defined.');
        };

        if (!author) {
            console.log('author is not defined.');
            throw new Error('author is not defined.');
        };
        
        const chat = this.getChatById(idChat);

        const message = {
            id,
            body,
            time_stamp,
            author,
        };

        chat.messages.push(message);

        this.updateChat(idChat, chat);
        return chat;
    };

    // DELETE

    static deleteChat(id) {
        if (!id) {
            console.log('id is not defined.');
            throw new Error('id is not defined.');
        };

        const chats = this.getChats();

        const chatIndex = chats.findIndex(chat => chat.id === id);

        if (chatIndex === -1) return null;

        chats.splice(chatIndex, 1);

        localStorageHelper.setItem(this.key, chats);
        return chats;
    };
};