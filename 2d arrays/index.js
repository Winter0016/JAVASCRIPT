let fruits = ["apples",'oranges',"banana"];
let vegetables = ["carrots","onions","potatos"];
let meats = ['eggs',"chickens","fish"];

let grocerylist = [fruits,vegetables,meats];

grocerylist[1][0] ="mangoes";

for(let list of grocerylist){
    for(let food of list){
        console.log(food);
    }
}