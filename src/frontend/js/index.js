import { modal, addModalEvents } from "./modules/modal.js";
import renderContacts from "./renders/render-contacts.js";

const contacts = [
    {
        name: 'felipi',
        number: '99524527',
        img: "./imgs/contact-sample1.png"
    },
    {
        name: 'gustavo',
        number: '99996660',
        img: "imgs/contact-sample2.png"
    },
    {
        name: 'mordekai',
        number: '99900088',
        img: "imgs/contact-sample5.png"
    },
    {
        name: 'rigby',
        number: '99900066',
        img: "imgs/contact-sample4.png"
    },
    {
        name: 'modekai falso',
        number: '99900090',
        img: "imgs/contact-sample3.png"
    },
];

const loaderConfig = {
    id: 'options',

    items: [
        {
            id: 's1',
            path: './loader-pages/section1.html',
            action: () => alert('SEÇÃO1'),
        },
        {
            default: true,
            id: 's2',
            path: './loader-pages/section2.html',
            action: () => alert('banana'),
        },
    ],

    target: document.querySelector('div#result'),
};

new HTMLElement(loaderConfig);

renderContacts(contacts);
addModalEvents();
