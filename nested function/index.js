// nested functions = functions inside other functions.outer functions have access to inner function
//inner functions are "hidden" from outside used in closures (future video topic);
let username = "Bro";
let userinbox = 0;
login();
function login(){
    displayusername();
    displayeruserinbox();
    function displayusername(){
        console.log(`Welcome ${username}`);
    }
    function displayeruserinbox(){
        console.log(`You have ${userinbox} new messages`);
    }   
}