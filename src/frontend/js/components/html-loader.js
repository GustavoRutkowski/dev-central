class HTMLLoader {
    constructor ({ id, items, target }) {
        if (typeof id != 'string') {
            console.error('id is not a string.');
            throw new TypeError('id is not a string.');
        };

        if (!Array.isArray(items)) {
            console.error('items is not an array.');
            throw new TypeError('items is not an array.');
        };
        
        if (!(target instanceof HTMLElement)) {
            console.error('target is not a HTMLElement.');
            throw new TypeError('target is not a HTMLElement.');
        };

        this.id = id;
        this.items = items;
        this.target = target;

        this.menuElement = document.getElementById(this.id);
        this.itemsElements = this.menuElement.querySelectorAll('.options__option-btn');

        this.default = items[0].id || null;

        items.forEach(e => {
            if (e.default) this.default = e.id;
        });

        this.itemsRendering = {};

        const defaultElement = this.getItemById(this.default);

        this.render(defaultElement);
        this.addEvents();
    };

    async render(item) {
        if (this.itemsRendering[item.id]) {
            this.target.innerHTML = this.itemsRendering[item.id];
            item?.action?.();
            return;
        };

        if (item.path) {
            const fetchResponse = await fetch(item?.path);
            const itemHTML = await fetchResponse?.text();
    
            this.itemsRendering[item.id] = itemHTML;
            this.target.innerHTML = this.itemsRendering[item.id] || itemHTML;
        };

        item?.action?.();
    };

    setSelected(element) {
        this.itemsElements.forEach(e => {
            e.classList.remove('options__option-btn--selected');
        });

        element.classList.add('options__option-btn--selected')
    };

    getItemById(id) {
        return this.items.find(e => e.id === id) || null;
    };

    addEvents() {
        this.itemsElements.forEach(e => {
            const item = this.getItemById(e.id);

            e.addEventListener('click', () => {
                this.render(item)
                this.setSelected(e);
            });
        });
    };
};

export default HTMLLoader;
