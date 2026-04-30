// for in loop


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    jvm: 'java'
}
for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "c++","java","python"]

for(const key in programming){
    // console.log(key);  // gives - 0 1 2 3 4
    console.log(programming[key]);
}