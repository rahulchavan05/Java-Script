// primitive datatypes

// 7 types : String, Number, Booleatn, null, undefined, Symbol, BigInt
 
const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);             // false

// bigInt

const bigNum = 16416165416161616161616516416156n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["rahul", "priya", "sunil"]

//objects 

let myObj ={
name:"Rahul",
age: 22
}

//finction 

const myFunction = function(){
   console.log("Hello world");
}

//console.log(typeof myFunction)
//console.log(myFunction)


//==================Memory=========================

// Two Types : 1) Stack (Primitive) , Heap (Non-Promitive)

let myName = "Name 1" 

let anothername = myName 

anothername = "Name 2"

console.log(myName)
console.log(anothername)

let userOne = {
   email : "user.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2.com"

console.log(userOne.email);
console.log(userTwo.email);


