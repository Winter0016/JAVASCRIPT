document.getElementById("submit").onclick=function(){
    let temp;
    if(document.getElementById("celcius").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("templabel").innerHTML=`${temp} °C`;
    }
    else if(document.getElementById("fahren").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("templabel").innerHTML=`${temp} °F`;
    }
    else{
        document.getElementById("templabel").innerHTML=`Select a unit`;
    }
}


function tocelsius(temp){
    return (temp-32)*(5/9);
}
function tofahrenheit(temp){
    return temp *9 /5 + 32;
} 
