// Immediately invoked function exprrssion

(function one(){
    console.log(`DB connected`);
})();



(function two(){   // named IIFE
    console.log(`DB connected1`);
})();




((name) => {
    console.log(`DB connected two ${name}`)
})('yusuf')