
// let a = 10
// const b = 20
var c = 300

if (true){

    let a = 10
    const b = 20
     c = 30              // If not data type give to variable it will consider as a var
}

// console.log(a);
// console.log(b);
// console.log(c);   // var will print the value out of scope 


function one(){
    const username = "rahul"

    function two(){
        const wesite = "youtube"
        console.log(username)
    }
    // console.log(wesite)

    two()



}

//one()

 if (true) {
    const username = "rahul"
    if(username === "rahul") {
        const website = " youtube"
        // console.log(username + website);
        
    }

    // console.log(website)
 }

 // console.log(username);


 //++++++++++++++++++++ interasting +++++++++++++++++++++

 console.log(addOne(5))

 function addOne(num){
    return num + 1
 }
 
 console.log(addTwo(5));
 
 const addTwo = function(num){
    return num + 2
 }

 console.log(addTwo(5));
 




