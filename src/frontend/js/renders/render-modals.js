import HTMLLoader from "../components/html-loader.js";
import addContactsAction from "../actions/add-contact.js";

const modalsButtonsClasses =  {
    default: 'components__modal-header-option-btn',
    selected: 'components__modal-header-option-btn--selected',
};

const friendsLoaderConfig = {
    id: 'friends-options',
    target: document.querySelector('dialog#friends .components__modal-content'),

    items: [
        { id: 'add-contact', path: './loadering/add-friends.html', action: addContactsAction },
        { id: 'pending-requests', path: './loadering/pending-requests.html' },
    ],

    classes: modalsButtonsClasses,
};

const groupsLoaderConfig = {
    id: 'groups-options',
    target: document.querySelector('dialog#groups .components__modal-content'),

    items: [
        { id: 'add-group', path: './loadering/add-group.html' },
        { id: 'add-organization', path: './loadering/add-organization.html' },
    ],

    classes: modalsButtonsClasses,
};

function renderModals() {
    new HTMLLoader(friendsLoaderConfig);
    new HTMLLoader(groupsLoaderConfig);
    
    const modals = [
        {
            btn: document.querySelector('.contacts-list__add-contact'),
            modal: document.querySelector('.components__modal#friends'),
        },
        {
            btn: document.querySelector('.contacts-list__create-group'),
            modal: document.querySelector('.components__modal#groups'),
        },
    ];

    return modals;
};

export default renderModals;