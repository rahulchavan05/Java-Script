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

// console.log(loginUserMassage("Rahul"));
// console.log(loginUserMassage());

function calculateCarPrice(val1, val2, ...num1){
    return num1
}


// console.log(calculateCarPrice(100, 200, 300, 400));

const user = {
    username: "Rahul",
    prices: 200
}


function handleObjects(anyObjects){
    console.log(`my name is ${anyObjects.username} and I have Rs.${anyObjects.prices}`);
    
}

// handleObjects(user)

// handleObjects({username:"Rahul", prices: 2000})

const myNewArray = [10, 20, 30, 40]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1, 2, 3, 4, 5]));




