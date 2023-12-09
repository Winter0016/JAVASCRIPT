let user = "  Bro code  ";
let phonenumber="123-456-7890";
/*user=user.trim();// get rid of empty space
console.log(user);
console.log(user.length);
console.log(user.charAt(0));
console.log(user.indexOf("o"));
console.log(user.lastIndexOf("o"));
*/
//user=user.toUpperCase();//upper case
//user=user.toLowerCase();//lower case
phonenumber=phonenumber.replaceAll("-","/");//replace all "-" to "/"
console.log(phonenumber);