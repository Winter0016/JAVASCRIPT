/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/

/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("[for]"); // selectect an element has attribute "for"
element.style.backgroundColor = "lightgreen";
*/

let element = document.querySelector(".desserts"); //select classname ="desserts" // use # for id like #desserts
element.style.backgroundColor = "blue";

let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
