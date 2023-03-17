type Size = ''|'S'|'M'|'L'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
        public status: boolean = false,
    ){}

    isProductValid(): boolean {
        for(const key in this){
            switch(typeof(this[key])) {
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`)
                    break;
                case 'boolean':
                    if((<boolean><unknown>this[key]) == false) throw Error(`${key} is false`)
                    break;
                default:
                    throw Error(`${key} is not valid`)
            }
        }
        return true;
    }

    toString() {
        // NO DRY
        // if (this.name.length <= 0) throw Error('Name is empty')
        // if (this.price <= 0) throw Error('Price is zero')
        // if (this.size.length <= 0) throw Error('Size is empty')

        // DRY
        return this.isProductValid() ? `${this.name} (${this.price}), ${this.size}, ${this.status}` : null
    }
}

(() => {
    const bluePants = new Product('Blue large pants', 10, 'M', true);
    console.log(bluePants.toString());
})();