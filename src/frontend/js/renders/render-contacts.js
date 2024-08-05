
const ulContactsList = document.querySelector(".contacts__contacts-list");

function renderContacts (arrayContacts) {

    arrayContacts.forEach((element) => {
        let liBase = document.createElement("li");
        liBase.classList.add("contacts-list__contact");
        liBase.title = element.name;
        
        liBase.innerHTML = `
            <div class="contact__picture">
                <img src="${element.img}" alt="${element.name}">
            </div>
        `;
        
        ulContactsList.appendChild(liBase);


    })
    const addContactBtn = `
        <li title="Adicionar contato" class="contacts-list__add-contact">
            <i class="fa-solid fa-plus"></i>
        </li>
    `;
    ulContactsList.insertAdjacentHTML('beforeend', addContactBtn);

};

export default renderContacts;