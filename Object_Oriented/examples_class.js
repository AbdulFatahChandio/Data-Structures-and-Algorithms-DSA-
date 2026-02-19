// Using class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const fatah = new Person("fatah", 25);
fatah.greet(); // Hello, my name is John
