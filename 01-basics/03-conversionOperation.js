let number = 33 
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

let isLogin = 1 
let cLogin = Boolean(isLogin)

console.log(cLogin)
console.log(typeof cLogin)


/* operation ethics */

console.log(2+"2");
console.log("2"+2); // agar string first hai toh sabhi ko string k hisab se treat kiya jayaga phale 
console.log(2 + 2+"2"); // agar string last hai toh phale addition kiya jayaga 
console.log("2" + 1 + 2); // string phale toh string k tarha treat hoga no addtion of last two no 
// better use paranthesis ()
console.log((3+4)* 5 % 4 )
