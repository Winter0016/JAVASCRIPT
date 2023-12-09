// array.forEachy() = executes a provided callback function once for each array element

let students = ["spongebob","patrick","squidward"];

//For.each method:
/*students.forEach(capitalize);
students.forEach(print);

function capitalize (element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print (array){
    console.log (array);
} */

// my method using call back : (in addition creating a new array too which is students2);
let students2 =[];
function1(students,function2);
function function1(students) {
    for (let i = 0; i < students.length; i++) {
        students[i] = students[i].replace(students[i].charAt(0), students[i].charAt(0).toUpperCase());
        function2(students[i]);
    }
}

function function2(std){
    students2.push(std);
}
console.log(students);
console.log(students2); 

// using arrow function expression // doesn't work out!!!not recommended!!
/*
let students2 = [];

const function1 = (students, function2) => {
    for (let i = 0; i < students.length; i++) {
        students[i] = students[i].replace(students[i].charAt(0), students[i].charAt(0).toUpperCase());
        function2(students[i]);
    }
}

function function2(std) {
    students2.push(std);
}

// Call the function1 after it's defined
function1(students);

console.log(students);
console.log(students2);
*/