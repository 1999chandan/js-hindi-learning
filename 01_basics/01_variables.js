const accountId = 1443223; 
let accountEmail = "chandan.test@gmail.com";
var accountPassword = "123847";
accountCity = "katni"; // in javascript we can define variable like this as well but do not do this why? 
accountEmail="test@gmail.com";
accountCity="jaipur";

let accountState; // if we define a variable and we don't assign any value to this and when we try this to print it will show as "undefined"
// accountId = 2; // not allowed

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
 prefer NOt to user var
 because of issue in block scope and function scope
*/