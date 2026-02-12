class User {
  #password;  // private variable

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(input) {
    return input === this.#password;
  }
}

const u1 = new User("Chandio", "1234");

console.log(u1.username);       // Allowed
// console.log(u1.#password);   Error (private)


console.log(u1.checkPassword("1234")); // true
