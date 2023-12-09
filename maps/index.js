// map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underwear",50]
]);

//store.forEach((value,key) => console.log(`${key} ${value}`));  (1)
// (1) and (2) jave the same result

//get method:
let shoppingcart = 0;
shoppingcart += store.get("t-shirt"); //get the value which is 20 for t-shirt
shoppingcart += store.get("underwear"); //get the value
//
// some other methods:
store.set("hat",40);
store.delete("underwear");
console.log(shoppingcart);
console.log(store.has("underwear"));
console.log(store.size);

//

store.forEach(print);   //(2)
function print(value,key){
    console.log(`${key} ${value}`);
} 