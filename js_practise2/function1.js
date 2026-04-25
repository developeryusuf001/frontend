function loginuserMessage(username = "rai"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginuserMessage("yusuf"));