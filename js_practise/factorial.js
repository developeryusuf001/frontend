let num = 3;

function factorial(n){
    if(n === 0 || n === 1){   // base case 
        return 1;
    }
    return n*factorial(n-1);  // recursive case
}
console.log(factorial(num));