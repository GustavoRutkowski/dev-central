const userLogged = {
    name: "felipi",
    id:"3"
}


const messagesList = [
    {
        body: "oii",
        id_author: 1
    },
    {
        body:"tudo",
        id_author: 2
    },
    {
        body: "não",
        id_author: 3
    },
    {
        body: "sim",
        id_author: 4
    }
];

const divBody = document.querySelector(".DentroDiv");
const buts = document.querySelector("#buton");

function renderMsg(messagesList){
//console.log("oi");

    messagesList.forEach((element) => {
    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mensagem")
    
    if(element.id_author == userLogged.id){
        createDiv.classList.add('minha');

        createDiv.innerHTML += `essa é a minha mensagem "${element.body}" do remetente "eu" <br>`;

        divBody.appendChild(createDiv);

    }else{
        createDiv.innerHTML += `essa é a mensagem "${element.body}" do remetente "${element.id_author}" <br>`;

        divBody.appendChild(createDiv);

    }

    
    divBody.appendChild(createDiv);
  
    })
};

//para poder usar em outros arquivos js
export default renderMsg;