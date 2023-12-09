let a;
let b;
let c;
document.getElementById("button1").onclick=function(){
    a=document.getElementById("input1").value;
    a = Number(a);
    b=document.getElementById("input2").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    console.log("Side c:",c);
    document.getElementById("result").innerHTML="Your result is: " + c;
}