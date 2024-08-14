import { modal, addModalEvents } from "./modules/modal.js";
import renderContacts from "./renders/render-contacts.js";
import HTMLLoader from "./components/html-loader.js";

//import DO DJABO
import addEventAddCheckUsersList from "./accept-or-reject.js";

const contacts = [
    {
        id: '#0001',
        name: 'felipi',
        description: 'sou o felipi',
        email: 'felipi@gmail.com',
        pass:'12345678',
        profile_picture: "./imgs/contact-sample1.png"
    },
    {
        id: '#0002',
        name: 'gustavo',
        description: 'sou o gustavo',
        email: 'gustavo@gmail.com',
        pass:'87654321',
        profile_picture: "./imgs/contact-sample2.png"
    },
    {
        id: '#0003',
        name: 'mordekai',
        description: 'sou o mordekai',
        email: 'passaroAzul@gmail.com',
        pass:'10101010',
        profile_picture: "./imgs/contact-sample5.png"
    },
    {
        id: '#0004',
        name: 'rigby',
        description: 'sou o rigby',
        email: 'guaxinimMarrom@gmail.com',
        pass:'senha123',
        profile_picture: "./imgs/contact-sample4.png"
    },
    {
        id: '#0005',
        name: 'mordekai falso',
        description: 'eu acho que sou o mordekai',
        email: 'passaroAzulFake@gmail.com',
        pass:'soumordekai',
        profile_picture: "./imgs/contact-sample3.png"
    },
];

const loaderConfig = {
    id: 'modal-options',

    items: [
        {
            id: 'add-contact',
            path: './loadering/add-friends.html',
            action: () => addEventAddCheckUsersList(contacts),
        },
        {
            id: 'pending-requests',
            path: './loadering/pending-requests.html',
            action: () => console.log('Pending Requests'),
        },
    ],

    target: document.querySelector('.modal__modal-content'),
};

new HTMLLoader(loaderConfig);

renderContacts(contacts);
addModalEvents();

//check do DJABO
//checkUserInList(contacts);
