// callback = a function passed as an argument to another function

/*let total = sum(2,3);
displayconsole(total);
function sum (x,y){
    let result = x + y;
    return result;
} */

//begin from here: 
//sum (2,3,displayconsole);
// try sum(2,3,displaydom);
/* sum(2,3,displaydom);

function sum (x,y,callback){ //you can rename "callback" to whatever you want, for example : "myfunction"
    callback(x+y);
}

function displayconsole(output){
    console.log(output);
}
function displaydom(output){
    document.getElementById("label1").innerHTML = output;
} */

// another callback:
sum(2,3,displayconsole);

function sum (x,y,callback){ //you can rename "callback" to whatever you want, for example : "myfunction"
    callback(x+y);
}

function displayconsole(output){
    console.log(output);
    displaydom(output*2);
}
function displaydom(output){
    document.getElementById("label1").innerHTML = output;
}
