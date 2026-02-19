const user ={
    userName : "abdul fatah",
    loginCount:8,
    signedIn:true
}
console.log(user.userName)
console.log(this.userName) // this does NOT refer to user here.



const user = {
    userName: "abdul fatah",
    loginCount: 8,
    signedIn: true,

    getUser() {
        console.log(this.userName);
    }
}

user.getUser();   // abdul fatah


const user ={
    userName : "abdul fatah",
    loginCount:8,
    signedIn:true,

     getUser() {
        console.log("Get user details from databases");
        console.log(this.userName);
    }
}
console.log(user.userName)
user.getUser();

const user ={
    userName : "abdul fatah",
    loginCount:8,
    signedIn:true,

     getUser : function () {
        console.log("Get user details from databases");
        //console.log(`User:name : ${userName}`); // ReferenceError: userName is not defined
        console.log(`Username : ${this.userName}`);
        console.log("Data in current context = ",this)
    }
}
console.log(user.userName)
user.getUser();
console.log(this) // shows us {} in browser it gives us window object



                   /**      Constructors Function  */

const promiseOne = new Promise()
const date = new Date()

function User(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new User("Abdul Fatah", 22);
const user2 = new User("Ali", 25);

console.log(" User 1 : ", user1);
console.log(" User 2 : ", user2);

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this // not neccessary 
}

const user1 = new User("Abdul Fatah", 8, true);
const user2 = new User("Ali", 3, false);

console.log("User 1:", user1.constructor);
console.log("User 2:", user2);

