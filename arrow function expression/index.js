// arrow function = compact alternative to a tradional function expression
// =>
// ex1:
/*const greeting = (username) => console.log (`Hello ${username}`);

greeting("Bro");*/

// normal code:
/*const percent = function(x,y){
    return x/y * 100;
}

console.log(`${percent(75,100)}%`)
*/
//using arrow function (replace "function" with arrow);
/*
const percent = (x,y) => x/y * 100;
console.log(`${percent(45,50)}%`)
*/

//ex 2:

let grades = [100,50,90,60,80,70];

grades.sort((x,y) => y-x);
grades.forEach((element)=>console.log(element));