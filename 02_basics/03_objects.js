// singleton = when we create object with constructor 
// Object.create

// object literals 
const mySym = Symbol("key1")

const JsUser ={
    name: "Rahul",
    "full name": "Rahul Chavan",
    [mySym]: "myKey1",             // for symble use []
    age: 29,
    location: "Banglore",
    email: "rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuseday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);               // do not use double cote for symble 

JsUser.email = "rahul@ymail.com"
// Object.freeze(JsUser)

JsUser.email = "rahul@google.com"
// console.log(JsUser)                  // o/p = [Symbol(key1)]: 'myKey1'

// function

JsUser.greeting = function(){
    console.log("Hello JsUSer");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUSer, ${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
