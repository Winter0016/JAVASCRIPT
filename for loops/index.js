/*for(let counter = 10; counter>0;counter-=1){
    console.log(counter);
}
console.log("HAPPY NEW YEAR!"); */

// break and continue statement
/*for(let i= 1;i<=20;i+=1){
    if(i==13){
        continue;
    }
    console.log(i);
}*/
 
//nested loop = a loop inside of another loop
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");
for(let i = 1; i <= rows; i = i +1){
    for(let j = 1; j <= columns; j = j + 1 ){
        document.getElementById("mylabel").innerHTML += symbol;
    }
    document.getElementById("mylabel").innerHTML += "<br>";
}