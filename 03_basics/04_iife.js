//Immediately Invoked Function Exoression (IIFE)

 
(function chai(){
    console.log(`databse connection`);
    
})();

((name) => {
    console.log(`databse connection ${name}`)
})('rahul')