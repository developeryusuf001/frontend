const coding = ["js", "c++", "java", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item)=> {
//      console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageNmae: "javascript",
        labguageFilename: "js"
    },
    {
        languageNmae: "python",
        labguageFilename: "py"
    },
    {
        languageNmae: "c++",
        labguageFilename: "cpp"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageNmae);
})