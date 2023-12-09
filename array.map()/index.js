// array.map() = executes a provided callback function once for each element AND creates a new array

let numbers = [1,2,3,4,5];
let squares = numbers.map(square);

//squares.forEach(print); // this one has the same result with (A) below 

function square(element){
    return Math.pow(element,2);
}

function print(element){
    console.log(element);
}

//for(let i = 0; i<numbers.length; i +=1){
    console.log(numbers[i]);
//}

/*for(let i = 0;i<squares.length;i +=1){  //(A)
    console.log(squares[i]);
}*/