const marvel_heros = ["thor", "spiderman", "ironman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const heros = marvel_heros.concat(dc)
// console.log(heros);

const all = [...marvel_heros, ...dc]   // used spread operator here...
console.log(all)

const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr21 = arr2.flat(Infinity)   
console.log(arr21);


console.log(Array.isArray("Yusuf"))   // returns false because it checks that its not an array.
console.log(Array.from("Yusuf"))   // from converts the string into individual letter array.



