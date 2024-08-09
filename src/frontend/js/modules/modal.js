const addContactBtn = document.querySelector('li.contacts-list__add-contact');
const modals = document.querySelectorAll('.components__modal');

function addModalEvents() {
    modals.forEach(modal => {
        const closeModalBtn = modal
        .querySelector('.components__modal-header-close-btn');

        addContactBtn.addEventListener('click', () => modal.showModal());
        closeModalBtn.addEventListener('click', () => modal.close());
    });
};

export { modals, addModalEvents };
