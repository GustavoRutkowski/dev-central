//para Arrays
function arrayToString(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function arrayToObject(key) {
    let newItem = localStorage.getItem(key);
    return JSON.parse(newItem);
}

//Para qualquer outra coisa
function setItem(key, item) {
    localStorage.setItem(key, JSON,stringify(item));
}

function getItemString(key) {
    //devolve como String
    localStorage.getItem(key);
}

function getItem(key){
    let newItem = localStorage.getItem(key);
    return JSON.parse(newItem);
}