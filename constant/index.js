const pi = 3.14159; //can't be change
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle");
radius=Number(radius);

//pi = 420.69; //if you enable this an assignment to constant variable error will occur

circumference=2 * pi * radius;
console.log("The circumference is:", circumference);