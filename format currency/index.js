let mynumber= 123456.789;
let mypercent = 100;
//different format system
//mynumber=mynumber.toLocaleString("en-US"); //US english
//mynumber=mynumber.toLocaleString("hi-IN"); //Hindi

//mynumber=mynumber.toLocaleString("en-US",{style:"currency",currency:"USD"}); //US english
mypercent=mypercent.toLocaleString(undefined,{style:"percent"}); //US english

console.log(mypercent);