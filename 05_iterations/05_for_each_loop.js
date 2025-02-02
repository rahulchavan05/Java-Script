const coding = ["js", "ruby", "java", "ptthon"]

coding.forEach(function (val) {
    //console.log(val);
    
})


coding.forEach((val) => {
    //console.log(val);
    
})

function printme(item){
    //console.log(item);
    
}

coding.forEach(printme)


coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


const myCoding = [
    {
        languagesName: 'JavaScript',
        languagesFileName: 'js'
    },
    {
        languagesName: 'Java',
        languagesFileName: 'java'
    },
    {
        languagesName: 'Paython',
        languagesFileName: 'py'
    }
]

myCoding.forEach( (val) => {
    console.log(val.languagesName, ":-",val.languagesFileName);
    
})