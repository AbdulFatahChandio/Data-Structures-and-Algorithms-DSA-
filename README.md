# Data-Structures-and-Algorithms-DSA-

This repository contains implementations of **Data Structures and Algorithms** using **JavaScript**, organized for learning and practice.

---

## 📦 Requirements

- **Node.js** (v14+ recommended)
- Basic knowledge of JavaScript

Check Node installation:
```bash
node -v

# Commands For Basic JS
 cmd node Javascript/test.js

```
## 📂 Project Structure
```Data-Structures-and-Algorithms-DSA/
│
├── Javascript/
│   ├── basics/
│   ├── OOP/
│       ├── classes.js
│       ├── constructor-functions.js
│       ├── prototypes.js
│       ├── encapsulation.js
│       ├── inheritance.js
│       ├── polymorphism.js
│       ├── abstraction.js
│       └── this-keyword.js
│   ├── arrays/
│   ├── strings/
│   ├── recursion/
│   ├── sorting/
│   └── searching/
│
├── DSA/
│   ├── stack/
│   ├── queue/
│   ├── linked-list/
│   ├── tree/
│   ├── graph/
│   └── hash-table/
│
├── test.js
└── README.md

```

# OOP


# JavaScript 
## Is javascript really have classes?
- Yes, JavaScript does have classes, but with a caveat: they are mostly syntactic sugar over its existing prototype-based inheritance system.
- but under the hood, it still uses prototypes.

# Objects In Javascript
- Collection of properties and methods
- toLowerCase

```bash
const user = {
    userName : "abdul fatah",
    loginCount:8,
    signedIn:true
}
console.log(user.userName)
console.log(this.userName) // this does NOT refer to user here.
```
-> this.userName inside method → refers to object
```bash
const user = {
    userName: "abdul fatah",
    loginCount: 8,
    signedIn: true,

    getUser() {
        console.log(this.userName);
    }
}

user.getUser();
```

## Constructors Function
- A constructor function is a special function used to create objects.
- We use the new keyword with constructor functions.

```bash
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Abdul Fatah", 8, true);
const userTwo = new User("Ali", 3, false);
const userThree = User("Abdul Qadir", 8, true); // It override the values in old function

console.log("User One:", userOne);
console.log("User Two:", userTwo);

## output :
User {
  userName: 'Abdul Fatah',
  loginCount: 8,
  isLoggedIn: true
}

User {
  userName: 'Ali',
  loginCount: 3,
  isLoggedIn: false
}

```

# Access modifiers 
- Access modifiers control where a variable or method can be accessed from.
### Main Types:

- Public

- Private

- Protected (not natively supported in JS, but can be simulated)

| Modifier  | Accessible Where      | JavaScript Support        |
| --------- | --------------------- | ------------------------- |
| Public    | Everywhere            | Yes                       |
| Private   | Inside class only     | Yes (`#privateField`)     |
| Protected | Class + Child classes | No (by convention `_var`) |

## Object Oriented Learning

| Pillar        | Meaning in JavaScript                         |
| ------------- | --------------------------------------------- |
| Abstraction   | Hide implementation using functions & classes |
| Encapsulation | Protect data using private fields & closures  |
| Inheritance   | Reuse code using `extends` keyword            |
| Polymorphism  | Same method, different implementation         |

# Why we use OOP?

## Parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new , this)

## Pillars in OOP
### Four Pillars in OOP
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

#### Abstraction 
- means hiding complex implementation details and showing only the essential features to the user.
- User only knows what the object does, not how it does it.

#### Encapsulation 
- means binding data and methods together and restricting direct access to some data.
- We protect data from outside access.

#### Inheritance 
- allows one class to inherit properties and methods from another class.
- Child class reuses parent class code. 

#### Polymorphism 
- means "many forms".
- It allows the same method name to behave differently in different classes.



| Pillar        | Meaning                           |
| ------------- | --------------------------------- |
| Abstraction   | Hide internal details             |
| Encapsulation | Protect data using private access |
| Inheritance   | Reuse code from parent class      |
| Polymorphism  | Same method, different behavior   |


```bash
Objects → Constructor → Classes → 4 Pillars → Inheritance → Polymorphism → Prototypes → Design Patterns
```




## 🏃 How To Run
```bash
git clone https://github.com/AbdulFatahChandio/Data-Structures-and-Algorithms-DSA.git
cd Data-Structures-and-Algorithms-DSA
node Javascript/file_name.js
```

# 👨‍💻 Author

Abdul Fatah Chandio  
Backend Developer (Node.js)  
📍 Pakistan 🇵🇰  

GitHub:   https://github.com/AbdulFatahChandio/  
LinkedIn: https://www.linkedin.com/in/abdul-fatah-chandio-1b7112322/  

