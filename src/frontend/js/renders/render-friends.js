/*
    <li class="components__user">
        <div class="components__user-picture">
            <img src="./imgs/contact-sample1.png" alt="Tio Fábio">
        </div>

        <span>Tio Fábio</span>

        <div class="components__user-options">
            <button title="Conversar com Tio Fábio" class="components__option">
                <i class="fa-solid fa-message"></i>
            </button>

            <button title="Desfazer Amizade" class="components__option">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>
*/

const friendsList = document.querySelector('.components__users-list');

function renderFriends(friendsArray) {
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
    });
};