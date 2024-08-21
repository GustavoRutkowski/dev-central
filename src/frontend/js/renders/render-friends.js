function renderFriends(friendsArray) {
    console.log(friendsArray)

    const friendsList = document.querySelector('.components__users-list');
    friendsList.innerHTML = '';

    friendsArray.forEach(friend => {
        const liFriend = document.createElement('li');
        liFriend.classList.add('components__user');

        console.log(friend);

        liFriend.innerHTML = `
            <div class="components__user-picture">
                <img src="${friend.profile_picture}" alt="${friend.name}">
            </div>

            <span>${friend.name}</span>

            <div class="components__user-options">
                <button title="Conversar com ${friend.name}" class="components__option">
                    <i class="fa-solid fa-message"></i>
                </button>

                <button title="Desfazer Amizade" class="components__option">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        friendsList.appendChild(liFriend);
    });
};

export default renderFriends;
