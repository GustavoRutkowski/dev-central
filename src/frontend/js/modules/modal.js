function addModalEvents(modalBtn, modal) {
    const closeModalBtn = modal
    .querySelector('.components__modal-header-close-btn');

    modalBtn.addEventListener('click', () => modal.showModal());
    closeModalBtn.addEventListener('click', () => modal.close());
};

function addAllModalsEvents(modals) {
    modals.forEach(modal => addModalEvents(modal.btn, modal.modal));
};

export { addModalEvents, addAllModalsEvents };
