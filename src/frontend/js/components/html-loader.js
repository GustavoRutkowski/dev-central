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

        if (!target instanceof HTMLElement) {
            console.error('target is not a HTMLElement.');
            throw new TypeError('target is not a HTMLElement.');
        };

        this.id = id;
        this.items = items;
        this.target = target;

        this.default = items[0].id;

        items.forEach(e => {
            if (e.default) this.default = e.id;
        });

        this.itemsRendering = {};
    };
    
    // Fazer um método para adicionar os eventos

    async render(item) {
        let response;

        if (!this.itemsRendering[item.id]) 
            response = await fetch(item?.path);
        
        const itemHTML = await response?.text() || null;

        this.itemsRendering[item.id] = itemHTML;
        this.target.innerHTML = this.itemsRendering[item.id] || itemHTML;

        item?.action?.();
    };

    setBackground() {
        
    };

    addEvents() {

    };
};

export default HTMLLoader;
