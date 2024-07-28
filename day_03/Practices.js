
/*
create a custom class for Product with the following requirements:
    Attributes: name, price, quantity, description, productId


    actions:
        constructor: to initialize the attributes
        displayProductInfo: to display the product's information in the console
    

*/
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

//test the product object

let product1 = new Product("Shirt", 25.99, 100, "A comfortable shirt for everyday wear", "P001");
product1.displayProductInfo();

let product2 = new Product("Pants", 45.99, 50, "Comfortable pants for everyday wear", "P002");
product2.displayProductInfo();


console.log('----------------------------------------------------------------');

/**
 * create a parent class Animal with the following attributes:
 * attributes: name, age, gender, breed
 * 
 * actions:
 *  constructor: to initialize the attributes
 * eat: to displays name +'is eating'
 * sleep: to displays name +'is sleeping'
 * 
 */

class Animal {
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
    
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

/**
 * create the following child classes of Animal with the following requirements
 * 
 *      Dog class:
    *     Additional actions:
    *                   bark: to displays name +'is barking'
    * 
    * Cat class:
    * Additional actions:
    *    Meow: to displays name +'is meowing'
 */

class Dog extends Animal {

    //add unique instance variable named color
    constructor(name, age, gender, breed, color) {
        super(name, age, gender, breed);
        this.color = color;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}