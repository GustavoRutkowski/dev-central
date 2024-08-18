const ulContactsList = document.querySelector(".contacts__contacts-list");

function renderContacts (arrayContacts) {
    arrayContacts.forEach((element) => {
        let liBase = document.createElement("li");
        liBase.classList.add("contacts-list__contact");
        liBase.title = element.name;
        
        liBase.innerHTML = `
            <div class="contact__picture">
                <img src="${element.profile_picture}" alt="${element.name}">
            </div>
        `;
        
        ulContactsList.appendChild(liBase);
    })

    ulContactsList.insertAdjacentHTML('beforeend', `
        <li title="Criar novo Grupo" class="contacts-list__create-group">
            <i class="fa-solid fa-plus"></i>
        </li>
    `);
};

export default renderContacts;