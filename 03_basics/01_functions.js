function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

// sayMyName(); 

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// let results = addTwoNumbers(2,4)

// console.log("Results", results);

// #return in function

// function addTwoNumbers(num1,num2){
//     return num1 + num2
// }

// let results = addTwoNumbers(2,4)

// console.log("Results", results);

// function loginUserMassage(username)
// {
//     if (!username){
//         console.log("Please enter your username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMassage("Rahul"));
// console.log(loginUserMassage(""));

function loginUserMassage(username = "Sam")
{
    if (!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMassage("Rahul"));
console.log(loginUserMassage());

