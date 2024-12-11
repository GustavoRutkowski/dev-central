const localStorageHelper = {
    getItem(key) {
        if (typeof key !== 'string') {
            console.error('key is not a string.');
            throw new TypeError('key is not a string.');
        };

        const valueStringfy = localStorage.getItem(key);
        
        return JSON.parse(valueStringfy);
    },

    setItem(key, value) {
        if (typeof key !== 'string') {
            console.error('key is not a string.');
            throw new TypeError('key is not a string.');
        };

        const valueStringfy = JSON.stringify(value);

function getItem(key){
    let newItem = localStorage.getItem(key);
    return JSON.parse(newItem);
}


export {
    arrayToString, arrayToObject, setItem, getItemString, getItem
    }
}