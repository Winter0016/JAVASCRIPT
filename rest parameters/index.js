// rest parameters = represents an indefinite number of parameters
// in short ,it means there are many different functions but with the same name, just different parameter.


let a =1;
let b=2;
let c=3;
let d=4;
let e = 5;

console.log(sum(a,b)); 
console.log(sum(a,b,c)); 
console.log(sum(a,b,c,d)); 
console.log(sum(a,b,c,d,e)); 
function sum(...numbers){ // for the console.log(sum(a,b,c,d,e)) you can also write sum(x,y,...numbers) // the first x,y will relate to a and b
    let total = 0;
    for(let number of numbers){
        if (number == 3){
            console.log(`Found ${number}`);
        }
        total +=number
    }
    return total;
}

