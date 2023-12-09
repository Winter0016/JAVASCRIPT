let numbers = [1,2,3,4,5,6,7,8,9];
//console.log(numbers);
// numbers = Number(numbers); // didn't work for maximum
//console.log(...numbers); // print 1 to 9 in 1 line and each seperated by space (its kinda put all the numbers out of the array, make them become individual element) like from {1,2,3,4} to 1 2 3 4 => easy for Math.

//let maximum = Math.max(numbers); // if you use this code it will print NaN
//maximum=Number(maximum); // didn't work either 

//solution for Math.max:
let maximum = Math.max(...numbers);
console.log(numbers[0])
console.log(maximum);


//example 2:

let class1 = ["290123","Peter","Sandy"];
let class2 = ["Me","She","He"];

console.log(class1[0].charAt(0));
// class1.push (class2) // if you use this it will add the entire array instead of adding each element in array to array class1
class1.push(...class2);

console.log(class1);