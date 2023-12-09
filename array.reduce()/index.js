// array.reduce = reduces an array to a single value

let prices = [5,10,15,20,25];
let totals = prices.reduce(checkout);

console.log(`The total is : ${totals}`);
function checkout(total,element){
    return total + element;
}