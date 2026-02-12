class Product {
  #price;  // private

  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    }
  }
}

const p1 = new Product("Laptop", 100000);

console.log(p1.name);           // Laptop
console.log(p1.getPrice());     // 100000
// console.log(p1.#price);      ❌ Error

class Order {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  placeOrder() {
    const total = this.#calculateTotal();
    console.log("Order placed. Total:", total);
  }

  #calculateTotal() {
    return this.product.getPrice() * this.quantity;
  }
}

const order1 = new Order(p1, 2);
order1.placeOrder();


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(this.name + " logged in");
  }
}

class Customer extends User {
  buyProduct() {
    console.log(this.name + " is buying a product");
  }
}

class Admin extends User {
  addProduct() {
    console.log(this.name + " added a new product");
  }
}

const customer1 = new Customer("Chandio", "c@gmail.com");
customer1.login();      // inherited
customer1.buyProduct();

const admin1 = new Admin("Ali", "admin@gmail.com");
admin1.login();         // inherited
admin1.addProduct();


class Payment {
  pay(amount) {
    console.log("Processing payment of", amount);
  }
}

class JazzCash extends Payment {
  pay(amount) {
    console.log("Paid", amount, "via JazzCash");
  }
}

class CreditCard extends Payment {
  pay(amount) {
    console.log("Paid", amount, "via Credit Card");
  }
}

const payments = [
  new JazzCash(),
  new CreditCard()
];

payments.forEach(method => {
  method.pay(5000);
});
