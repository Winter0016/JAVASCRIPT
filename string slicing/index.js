let fullname= "Bro Code";
let firstname;
let lastname;
//lastname = fullname.slice(fullname.indexOf(" ")+1); //same result to the one below
lastname = fullname.slice(4); // start with index postion 4
firstname = fullname.slice(0,3) // start at 0 stop before 3
console.log(lastname);
console.log(firstname);