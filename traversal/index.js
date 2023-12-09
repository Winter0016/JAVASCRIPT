/*
let element = document.querySelector("#fruit");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";
*/

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling //would apply for entire <ul id="vegetable">
// .previousElementSibling // previous one which is none is current element is fruit
// .children[] //children[1], children[2], children[3]
// Array.from(.children)


//array stuff:
/*let element = document.querySelector("#fruit");
let childern = Array.from(element.children);
childern.forEach(child => child.style.backgroundColor ="lightgreen");
*/

//or you can write like this:

let element = document.querySelector("#fruit");
let fruit_children = Array.from(element.children);
fruit_children.forEach(Paint); // apply function Paint for each children of fruit

function Paint(you_can_put_any_parrameter_name_here){
    you_can_put_any_parrameter_name_here.style.backgroundColor = "lightgreen";
}



//