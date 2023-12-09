let username = "Bro";
let items = 3;
let total = 75;

/*console.log("Hello",username);
console.log("You have",items,"Items in your cart");
console.log("Your total is $", total);
*/

/*console.log(`Hello ${username}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is ${total}`);
*/

let text = `Hello ${username} You have ${items} items in your cart and total is ${total} dollars`;

document.getElementById("label1").innerHTML = text;