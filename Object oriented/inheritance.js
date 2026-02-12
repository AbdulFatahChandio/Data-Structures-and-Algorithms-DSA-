class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);  // parent constructor call
    this.grade = grade;
  }

  study() {
    console.log(this.name + " is studying");
  }
}

const s1 = new Student("Chandio", "A");

s1.greet();  // inherited
s1.study();
