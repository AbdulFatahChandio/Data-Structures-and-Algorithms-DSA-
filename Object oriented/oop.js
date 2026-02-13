// const user ={
//     userName : "abdul fatah",
//     loginCount:8,
//     signedIn:true
// }
// console.log(user.userName)
// console.log(this.userName) // this does NOT refer to user here.



// const user = {
//     userName: "abdul fatah",
//     loginCount: 8,
//     signedIn: true,

//     getUser() {
//         console.log(this.userName);
//     }
// }

// user.getUser();   // abdul fatah


// const user ={
//     userName : "abdul fatah",
//     loginCount:8,
//     signedIn:true,

//      getUser() {
//         console.log("Get user details from databases");
//         console.log(this.userName);
//     }
// }
// console.log(user.userName)
// user.getUser();

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
// console.log(user.userName)
// user.getUser();
console.log(this) // shows us {} in browser it gives us window object