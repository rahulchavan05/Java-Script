const accountID = 1234523
let accounEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"   // without declare any keyword we can define variables 
let accountState;
// acoountID = 2 // not allowed

accountEmail = "rahul@ht.com"
accountPassword = "1234222"
accountCity = "Beed"

/* prefer not to use var variable
because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);