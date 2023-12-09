let x;
document.getElementById("myButton").onclick=function(){
    x = document.getElementById("mynumber").value;
    x=Number(x);
    console.log(x);
    document.getElementById("myLabel").innerHTML = "your fucking number is " + x;
}