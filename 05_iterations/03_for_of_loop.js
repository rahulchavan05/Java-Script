// #for of

const arr = ['superman', 'batman', 'spiderman']

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings){
    // console.log(`each char is "${greet}"`);
    
}

// #Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', 'United states of America')
map.set("Fr", "France")
// map.set("IN", 'India')

// console.log(map);

// for(const [key] of map){
//     console.log(key);
    
// }


for(const [key, values] of map){
   // console.log(`${key} :-  ${values}`);
    
}



// #Objects

const myObject = {
    game: 'NFS',
    game2: 'VCity'
}

for(const [Keys, value] of myObject){
    // console.log(`Objects ${key} :-  ${values}`);   //  TypeError: myObject is not iterable
}
