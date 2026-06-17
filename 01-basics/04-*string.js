const gameName = new String ('Sumit')

console.log(gameName.slice(0,3));
let sliceStr = gameName.slice(0,3)
console.log(sliceStr);
sliceStr = 'Smjkccc'
console.log( sliceStr);


const name = "Sumit-mjk"
const repoCount = 4

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('Sfdswrt-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sumit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dghess.com/fwsghtd%20sumit"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));