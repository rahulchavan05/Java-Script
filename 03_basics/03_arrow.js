const user = {
username: "Rahul",
code: 123,

   welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    //console.log(this)


   }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username = "Rahul"
//     console.log(this.username);
// }

// chai()     // results = undefined (due to this keywords)

// const chai = function (){
//     let username  = "rahul"
//     console.log(this.username);
// }

// const chai = () => {
//     let username  = "rahul"
//     console.log(this.username);
// }

// chai() 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ({usrname:"rahul"});


// console.log(addTwo(2,5));


const myArray = [3,5,7,9,8]

// myArray.forEach()




