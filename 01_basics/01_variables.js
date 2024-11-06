const accountId = 12345
let accountEmail = "rakhi@gmail.com"
var accountPassword = "12121"
accountCity = "Jaipur"  //it is also possible in js
let accountState;
// accountId = 2; // not allowed

accountEmail = "saini@gmail.com"
accountPassword = "23232"
accountCity = "bangluru"

/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log([accountId,accountEmail, accountPassword,accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])