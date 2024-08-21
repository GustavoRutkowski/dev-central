import { addFriend } from "../modules/friends.js";
import localStorageHelper from "../modules/localStorage.js";
import renderFriends from "../renders/render-friends.js";

function addContactsAction() {
    renderFriends(userLogged.contacts);

    const usersForm = document.querySelector('#users-form');
    const userIdInput = document.querySelector('#user-id');
    
    usersForm.addEventListener('submit', e => {
        e.preventDefault();
                    
        console.log(userIdInput.value)
        addFriend(userIdInput.value);

        renderFriends(userLogged.contacts);
    });

    const userLogged = localStorageHelper.getItem('user-logged');
};

export default addContactsAction;
