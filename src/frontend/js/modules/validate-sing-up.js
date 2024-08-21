import { validateEmail } from "./validate-login";
import { validatePass } from "./validate-login";

function validateSingUp(){
    validateEmail();
    validatePass();
}

function checkNewUser(){

}

const contacts = [
    {
        id: '#0001',
        name: 'felipi',
        description: 'sou o felipi',
        email: 'felipi@gmail.com',
        pass:'12345678',
        profile_picture: "./imgs/contact-sample1.png"
    },
    {
        id: '#0002',
        name: 'gustavo',
        description: 'sou o gustavo',
        email: 'gustavo@gmail.com',
        pass:'87654321',
        profile_picture: "./imgs/contact-sample2.png"
    },
    {
        id: '#0003',
        name: 'mordekai',
        description: 'sou o mordekai',
        email: 'passaroAzul@gmail.com',
        pass:'10101010',
        profile_picture: "./imgs/contact-sample5.png"
    },
    {
        id: '#0004',
        name: 'rigby',
        description: 'sou o rigby',
        email: 'guaxinimMarrom@gmail.com',
        pass:'senha123',
        profile_picture: "./imgs/contact-sample4.png"
    },
    {
        id: '#0005',
        name: 'mordekai falso',
        description: 'eu acho que sou o mordekai',
        email: 'passaroAzulFake@gmail.com',
        pass:'soumordekai',
        profile_picture: "./imgs/contact-sample3.png"
    },
];

let newUser = {
    name: '',
    email: '',
    pass: ''
}

const formBtn = document.querySelector(".components__btn");
formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
 
    newUser = {
        name: document.querySelector("#text-input"),
        email: document.querySelector("#"),
        pass: document.querySelector("#")
    }

    contacts.forEach((e) => {
        
    })
    
})
