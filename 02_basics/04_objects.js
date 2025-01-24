// const tinderUser = new Object()   //singleton object 
const tinderUser = {}             // Non singleton object 

// Vules added in objects 
tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fristname: "rahul",
            lastname: "chavan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fristname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {7: "a", 8: "b"}

// const obj5 = {obj1, obj2}         // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj5 = Object.assign({}, obj1, obj2, obj3)

const obj5 = {...obj1, ...obj2}

// console.log(obj5);


// #when values comes from data base 
const User = [
    {
        name : "rahul",
        age: "12"
    },
    {
        name : "rahul",
        id: 13
    },
    {
        name : "rahul",
        id: 14
    },
    {
        name : "rahul",
        id: 15
    },
    {
        name : "rahul",
        id: 16
    }
]

// console.log(User[1].name)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN'));



