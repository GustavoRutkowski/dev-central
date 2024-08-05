const addContactBtn = document.querySelector('li.contacts-list__add-contact');
const modal = document.querySelector('dialog#modal');
const closeModalBtn = modal.querySelector('.modal-header__close-btn');

function addModalEvents() {
    addContactBtn.addEventListener('click', () => modal.showModal());
    closeModalBtn.addEventListener('click', () => modal.close());
};

export { modal, addModalEvents };
