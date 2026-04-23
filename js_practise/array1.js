const myarr = new Array(0,1,2,3,4,5)
console.log(myarr[1]);

    // Array Methods

    myarr.push(6)
    myarr.push(7)
    myarr.push(8)
    myarr.pop()

   myarr.unshift(9)
   myarr.unshift(15) // unshift(num) is used to add one or more elements to the beginning of an array.
   myarr.shift()   // shift() is used to remove the first element of an array.

   console.log(myarr.includes(9))   // include() - returns boolean answer.
   console.log(myarr.indexOf(19))   // indexOf() - returns -1 when element is not present in the array.

const newarr = myarr.join()


console.log(myarr);
console.log(typeof newarr);

// slice , splice 

console.log("A", myarr);

const myn1 = myarr.slice(1,3)  // slice does not change the original array.
console.log("slice opp result: " +myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3)
console.log("C ", myarr);
console.log("splice opp result: " +myn2);  // splice changes the original array.