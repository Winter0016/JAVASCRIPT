let area;
let width;
let height;

width = window.prompt("Enter width:");
height = window.prompt("Enter height:");
area = getarea(width,height);
console.log("The area is:",area);
function getarea(width,height){
    return width*height;
}