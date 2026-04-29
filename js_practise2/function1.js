function loginuserMessage(username = "rai"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginuserMessage("yusuf"));


function calculateCartPrice(...num1){   // ... is called as spread operator and also as rest operator, it depends on its use case.
    return num1
 
}
console.log(calculateCartPrice(200, 400));


function calculateCartPrice(val1, val2, ...num1){ 
    return num1
 
} 
console.log(calculateCartPrice(200, 400, 500, 7000));


const user = {    // passing objects in a function
    username: "yusuf",
    prices: 145
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "Ayesha",
    price: 1999
})


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));