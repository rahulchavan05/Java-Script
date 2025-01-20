// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDatev=new Date(2023, 0, 23)
//console.log(myCreatedDatev.toDateString());

// let myCreatedDatev=new Date(2023, 0, 23, 5, 3)
// let myCreatedDatev=new Date("2023-01-23")
let myCreatedDatev=new Date("01-23-2023")

// console.log(myCreatedDatev.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDatev.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.tolocaleString('default', {
    weekday: "long"
})