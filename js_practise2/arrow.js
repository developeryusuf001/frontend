const user = {
    username: "yusuf",
    price: 89999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "hamza";
// user.welcomeMessage()
// console.log(this);

// function gun(){
//     let username = "yusuf"
//     console.log(this.username);
// }
// gun()


const war = () => {
    let username = "yusuf"
    console.log(username);
}
war()

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)   // implicit return
const addTwo = (num1, num2) => ({username:"yusuf"})
console.log(addTwo(7,9))