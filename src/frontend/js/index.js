import { modals, addModalEvents } from "./modules/modal.js";
import renderContacts from "./renders/render-contacts.js";
import HTMLLoader from "./components/html-loader.js";

const contacts = [
    {
        id: '1',
        name: 'felipi',
        description: 'sou o felipi',
        email: 'felipi@gmail.com',
        pass:'12345678',
        profile_picture: "./imgs/contact-sample1.png"
    },
    {
        id: '2',
        name: 'gustavo',
        description: 'sou o gustavo',
        email: 'gustavo@gmail.com',
        pass:'87654321',
        profile_picture: "./imgs/contact-sample2.png"
    },
    {
        id: '3',
        name: 'mordekai',
        description: 'sou o mordekai',
        email: 'passaroAzul@gmail.com',
        pass:'10101010',
        profile_picture: "./imgs/contact-sample5.png"
    },
    {
        id: '4',
        name: 'rigby',
        description: 'sou o rigby',
        email: 'guaxinimMarrom@gmail.com',
        pass:'senha123',
        profile_picture: "./imgs/contact-sample4.png"
    },
    {
        id: '5',
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
            action: () => console.log('Add Contact'),
        },
        {
            id: 'pending-requests',
            path: './loadering/pending-requests.html',
            action: () => console.log('Pending Requests'),
        },
    ],

    target: document.querySelector('dialog#friends .components__modal-content'),
    
    classes: {
        default: 'components__modal-header-option-btn',
        selected: 'components__modal-header-option-btn--selected',
    },
};

new HTMLLoader(loaderConfig);

renderContacts(contacts);
addModalEvents();
