const accountId =14443
let accountEmail = "FatahChandio@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi" // not good way for declaration 
let accountState;
//accountId = 2 // not allowed

// console.log(accountId);

//accountEmail = "Alis@gmail.com" // Allowed

//console.log(accountEmail)

/**
Prefer not to use var 
because of issue in block scoped and functional scoped
 */

accountPassword = "00000" // Allowed

// console.log(accountPassword)

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])