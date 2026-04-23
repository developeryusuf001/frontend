// singleton is made through constructor...

// object literals

const mySymbol = Symbol("key1")  // declared symbol data type

const JsUser = {
    name: "Yusuf",
    "full name": "Mohammad Yusuf",
    [mySymbol]: "hello",
    age: 20,
    location: "Kanpur",
    email: "Mohammadyusufcse001@gmail",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}   // object created.

console.log(JsUser.email)   
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySymbol])   // printed symbol data type.
 // Object.freeze(JsUser)  // we can freeze the object elemnts to prevent changes.

JsUser.email = "helloworld786@gmail.com";
console.log(JsUser.email)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello user");
}
JsUser.greetingtwo = function(){
    console.log(`hello user, ${this.age}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
