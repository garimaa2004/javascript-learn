const accountId = 144553
let accountEmail = "garima@google.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState;


//accountId = 2 //not allowed
accountEmail = "gb@bg.com"
accountPassword = "212121"
accountCity = "bengaluru"

/*
Prefer not to use var because of
issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
