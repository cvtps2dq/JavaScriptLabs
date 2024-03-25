class Product {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class Inventory {
    constructor() {
        this.products = {};
    }

    addProduct(name, quantity) {
        if (this.products.hasOwnProperty(name)) {
            this.products[name].quantity += quantity;
        } else {
            this.products[name] = new Product(name, quantity);
        }
    }

    printInventory() {
        for (let productName in this.products) {
            const product = this.products[productName];
            console.log(`${product.name} -> ${product.quantity}`);
        }
    }
}

function updateInventory(currentInventory, delivery) {
    const inventory = new Inventory();

    // add to inv
    for (let i = 0; i < currentInventory.length; i += 2) {
        const name = currentInventory[i];
        const quantity = parseInt(currentInventory[i + 1]);
        inventory.addProduct(name, quantity);
    }

    // delivery day!!! xD  | update inv
    for (let j = 0; j < delivery.length; j += 2) {
        const name = delivery[j];
        const quantity = parseInt(delivery[j + 1]);
        inventory.addProduct(name, quantity);
    }

    inventory.printInventory();
}

const currentInventory = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
];
const delivery = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
];

updateInventory(currentInventory, delivery);