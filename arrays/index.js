let fruit = ["apple", "orange","banana"];

//fruit[0] ="Coconut"
fruit.push("lemon"); //add an element at the last position of the array
fruit.pop(); // remove the last element of the array
fruit.unshift("Mango") //add an element at the beginning
fruit.shift(); //remove element from beginning

let length = fruit.length;
let index = fruit.indexOf("banana");
console.log(index);
console.log(length);

console.log(fruit);