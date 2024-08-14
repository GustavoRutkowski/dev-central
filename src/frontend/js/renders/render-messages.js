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
//         time_stamps: '14/08/2024 - 15:18',
//         author: userLogged,
//         chat_id: null,
//     },
// ];

function renderMsg(userLogged, messagesList) {
    const divBody = document.querySelector(".conversation-area__messages");

    messagesList.forEach((element) => {
        const message = document.createElement('li');
        message.classList.add('messages__message');
        
        const isMyMessage = element.author_id === userLogged.id
        const myMsgClass = 'messages__message--my-msg'

        if (isMyMessage) message.classList.add(myMsgClass);

        divBody.appendChild(message);
    });
};

//para poder usar em outros arquivos js
export default renderMsg;