// const userLogged = {
//     id: 1,
//     name: 'Gustavo',
//     description: null,
//     email: null,
//     pass: null,
//     profile_picture: './imgs/contact-sample1.png',
// }

// const messagesList = [
//     {
//         id: 1,
//         body: "Lorem Ipsum Dolor Sit Amet...",
//         time_stamp: '14/08/2024 - 15:18',
//         author: userLogged,
//         chat_id: null,
//     },
// ];

function renderMsg(userLogged, messagesList) {
    const messagesContainer = document.querySelector(".conversation-area__messages");

    messagesList.forEach(msg => {
        const message = document.createElement('li');
        message.classList.add('messages__message');
        
        const isMyMessage = msg.author.id === userLogged.id;
        const myMsgClass = 'messages__message--my-msg';

        if (isMyMessage) message.classList.add(myMsgClass);

        message.innerHTML = `
            <div class="message__message-infos">
                <div class="message-infos__user-infos">
                    <div class="user-infos__picture">
                        <img src="./imgs/contact-sample3.png" alt="">
                    </div>

                    <span>Miguel Jeffersson</span>
                </div>

                <span class="message-infos__timestamp">${msg.time_stamp}</span>
            </div>
    
            <section class="message__content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, laudantium!
            </section>
        `;

        messagesContainer.appendChild(message);
    });
};

export default renderMsg;