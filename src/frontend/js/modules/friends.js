import Users from "../models/users.js";
import { stringToId, idToString } from "./convert-id.js"
import localStorageHelper from "./localStorage.js";

function addFriend(friendStrId) {
    const user = localStorageHelper.getItem('user-logged');
    const friendId = stringToId(friendStrId);
    
    if (!user) {
        console.error('user not logged.');
        throw new Error('user not logged.');
    };

    Users.addContactToUser(user.id, friendId);
};

export { addFriend };
