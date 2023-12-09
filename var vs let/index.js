//let = variables are limited to block scope{}
// var = variables are limited to a function(){}
// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties) => might cause malfunction
// => kinda prefer let over var

var name = "Bro";

function dosomething(){
    for(var i = 1; i <= 3; i+= 1){
        //console.log(i);
    }
}
console.log(i); 