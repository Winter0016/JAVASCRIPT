//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething; 
//element.onmouseover = doSomething; //cai nay voi cai duoi phai di chung voi nhau, tuong tu voi down and up
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething; //click or click and hold
element.onmouseup = doSomethingElse; // click 1 lan

function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}