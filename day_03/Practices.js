/**
 * Represents a product with attributes such as name, price, quantity, description, and productId.
 *
 * @class Product
 * @constructor
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {string} description - The description of the product.
 * @param {string} productId - The unique identifier of the product.
 */
class Product {
    constructor(name, price, quantity, description, productId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    /**
     * Displays the product's information in the console.
     *
     * @method displayProductInfo
     * @memberof Product
     * @returns {void}
     */
    displayProductInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }
}

// Test the product object
let product1 = new Product("Shirt", 25.99, 100, "A comfortable shirt for everyday wear", "P001");
product1.displayProductInfo();

let product2 = new Product("Pants", 45.99, 50, "Comfortable pants for everyday wear", "P002");
product2.displayProductInfo();

console.log('----------------------------------------------------------------');

/**
 * Represents an animal with attributes such as name, age, gender, and breed.
 *
 * @class Animal
 * @constructor
 * @param {string} name - The name of the animal.
 * @param {number} age - The age of the animal.
 * @param {string} gender - The gender of the animal.
 * @param {string} breed - The breed of the animal.
 */
class Animal {
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    /**
     * Displays a message indicating that the animal is eating.
     *
     * @method eat
     * @memberof Animal
     * @returns {void}
     */
    eat() {
        console.log(`${this.name} is eating`);
    }

    /**
     * Displays a message indicating that the animal is sleeping.
     *
     * @method sleep
     * @memberof Animal
     * @returns {void}
     */
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

/**
 * Represents a dog, which is a child class of Animal.
 *
 * @class Dog
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the dog.
 * @param {number} age - The age of the dog.
 * @param {string} gender - The gender of the dog.
 * @param {string} breed - The breed of the dog.
 * @param {string} color - The color of the dog.
 */
class Dog extends Animal {
    constructor(name, age, gender, breed, color) {
        super(name, age, gender, breed);
        this.color = color;
    }

    /**
     * Displays a message indicating that the dog is barking.
     *
     * @method bark
     * @memberof Dog
     * @returns {void}
     */
    bark() {
        console.log(`${this.name} is barking`);
    }
}

/**
 * Represents a cat, which is a child class of Animal.
 *
 * @class Cat
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the cat.
 * @param {number} age - The age of the cat.
 * @param {string} gender - The gender of the cat.
 * @param {string} breed - The breed of the cat.
 */
class Cat extends Animal {
    /**
     * Displays a message indicating that the cat is meowing.
     *
     * @method meow
     * @memberof Cat
     * @returns {void}
     */
    meow() {
        console.log(`${this.name} is meowing`);
    }
}