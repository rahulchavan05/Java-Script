// for 

for (let i=0; i<=4; i++){

    // console.log(i);
    
}

for (let i = 1; i<=4; i++){
    //console.log(i);
    for(let j = 1; j<=4; j++){
        //console.log(`inner loop = ${j}, outer loop ${i}`);
        
    }
    
}

let myArray = ["flash", "batman", "spiderman"]

//console.log(myArray[1]);

for(let i=0; i<myArray.length; i++){
    //console.log(myArray[i]);
    
}

// break and continue

for(let i=0; i<=10; i++){
    if(i==5){
        //console.log(i);
        break;
    }
    //console.log(i);
}

for(let i=0; i<=10; i++){
    if(i==5){
        //console.log(`Detect 5 number ${i}`);
        continue;
    }
    //console.log(i);
}