function mobaLazf(username){
    if(username === undefined){
        console.log("please enter your username buddy ");
        return 
        
    }
    return `${username} is the name of guy enter just now !`;
}
//console.log(mobaLazf("Mobasshir dhi is small" ));
console.log(mobaLazf()) // interview - if nothing is passed as argument , it will print undefined 

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(500,300,200));

const user = {
username : "Sum",
price : 2354
}

function handelObj (anyObj){
    console.log(`name is ${anyObj.username} and price is ${anyObj.price}`);
    
}
handelObj(user)

const myArr  = [100,3443,438,743]

function returnArray (anyArry){
    return anyArry[3]
    
}
console.log(returnArray(myArr));
