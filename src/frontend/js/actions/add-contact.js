import { addFriend } from "../modules/friends.js";

function addContactsAction() {
    const usersForm = document.querySelector('#users-form');
    const userIdInput = document.querySelector('#user-id');
    
    usersForm.addEventListener('submit', e => {
        e.preventDefault();
                    
        addFriend(userIdInput.value);
    });
};

export default addContactsAction;
