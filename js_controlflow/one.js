// for of loop

// [",",",",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greetings = "hi, Yusuf i am here ok."
for (const i of greetings){
    // console.log(i);
}


// maps

const map = new Map()
map.set('226026', "India")
map.set('208001', "India")
map.set('fr', "France")
// console.log(map);

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'minecraft',
    'game2': 'freefire'
}
// for (const [key, value] of myObject){   // shows error - myObject is not iterable.
//     console.log(key, ':-', value);

// 