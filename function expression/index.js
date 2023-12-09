// function expression = function without a name ( annonymouse function)

let count = 0;
document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("label1").innerHTML= count;
}
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("label1").innerHTML= count;
}