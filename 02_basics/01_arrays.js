const myArr = [0, 1, 2, 3, 4, 5]
const myHerows = ["nijaHatodi", "IronMan"]

const muArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[2]);

// Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()            // remove last value 

// myArr.unshift(9)       // add value in Frist in array 
// myArr.shift()          // remove frist value in array 

// console.log(myArr.includes(5));   // check 5 are avaible in array (True/false)
// console.log(myArr.indexOf(9));       //show index if value is not present in array it give '-1' in output

const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);

//==== slicce, splice 

console.log("A ", myArr);

const myn1 =  myArr.slice(1,4)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr);
