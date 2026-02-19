class User {
    constructor(name) {
        this.name = name;   // public
    }

    greet() {             // public method
        console.log(`Hello ${this.name}`);
    }
}

const u1 = new User("Fatah");
console.log(u1.name); 
u1.greet();             


class User1 {
    #password;   // private property

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword() {
        console.log(this.#password);  // ✅ allowed
    }
}

const u2 = new User1("Fatah", "12345");

console.log(u1.name);        // ✅ works
// console.log(u1.#password); // ❌ ERROR (private)


class User2 {
    constructor(name) {
        this._role = "user";  // treated as protected
    }
}

class Admin extends User2 {
    showRole() {
        console.log(this._role);  // accessible in child class
    }
}

const admin = new Admin("Fatah");
admin.showRole();


class Account {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(pass) {
        return pass === this.#password;
    }
}

const acc = new Account("fatah", "123");

console.log(acc.username);     // ✅ public
// console.log(acc.#password); // ❌ private

console.log(acc.login("123")); // true
