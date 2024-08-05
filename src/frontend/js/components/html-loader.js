class HTMLLoader {
    constructor ({ id, items, target }) {
        if (typeof id != 'number') {
            console.error('id is not a number.');
            throw new TypeError('id is not a number.');
        };

        if (!Array.isArray(items)) {
            console.error('items is not a array.');
            throw new TypeError('items is not a array.');
        };

        this.id = id;
        this.items = items;
        this.target = target;
    };
}

export default HTMLLoader;
