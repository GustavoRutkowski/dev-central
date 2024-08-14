// const inputIdFriend = document.querySelector("#user-id").value;
// const regexpId = /#\d{4}/;
// function checkId(/*qual?*/) {
//     return regexpId.test(inputIdFriend);
// };
// function checkUserInList(contact) {
//     if (!checkId()) return false;
    
//     contact.forEach((contactList) => {
//         if (inputIdFriend == contactList.id) {
//             alert("usuario está na lista");
//         } else {
//         alert("usuario não encontrado");
//         }
//     })
// }
// const buttonAddFriend = document.querySelector(".btn-comp add-user-container__submit-btn");
// buttonAddFriend.addEventListener("click", () => {
//     //errin básico (<|_|>)
//     // checkId(contacts);
//     // if (checkId(contacts) == true) {
//     //     alert("amigo adicionado")
//     // } else {
//     //     alert("não adicionou")
//     // }
// checkUserInList(contacts);
// })
// export default checkUserInList;


function checkId(value, regexp) {
    return regexp.test(value);
}

function checkUserInList(contacts) {
    const inputIdFriend = document.querySelector("#user-id").value;
    const regexpId = /#\d{4}/;

    if (!checkId(inputIdFriend, regexpId)) {
        alert("ID inválido");
        return false;
    }

    
        
    let userFound = false;
    contacts.forEach((contactList) => {
        if (inputIdFriend == contactList.id) {
            alert("Usuário está na lista");
            userFound = true;
        }
    });

    if (!userFound) {
        alert("Usuário não encontrado");
    }
}

function addEventAddCheckUsersList(contacts){

    const buttonAddFriend = document.querySelector(".btn-comp" /*add-user-container__submit-btn*/);
    
    const form = document.querySelector(".modal-content__form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    
    buttonAddFriend.addEventListener("click", (e) => {
        e.preventDefault();
        checkUserInList(contacts);
    });
}


export default addEventAddCheckUsersList;