
const myObject = {
    ajs: 'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: 'swift by apple'
}

// for (const key in myObject){
//     console.log(`${key}`);
    
// }

for (const key in myObject){
   // console.log(`${myObject[key]} `);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
   // console.log(programming[key]);
    
}

// #Map 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map){
   // console.log(key); // nothing will print in console 
    
}