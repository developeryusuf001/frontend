// function loginuserMessage(username = "rai"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginuserMessage("yusuf"));


function calculateCartPrice(...num1){   // ... is called as spread operator and also as rest operator, it depends on its use case.
    return num1
 
}
console.log(calculateCartPrice(200, 400, 500));