document.getElementById("mybutton").onclick=function(){
    const mycheckbox = document.getElementById("mycheckbox")
    const Visa = document.getElementById("visa")
    const Master = document.getElementById("master")
    const Paypal = document.getElementById("paypal")
    let checkthebox = false;
    let forgot_to_check = false;
    if(mycheckbox.checked){
        checkthebox=true;
    }
    if(mycheckbox.checked ==true && ((Visa.checked) || (Master.checked) || (Paypal.checked))){
        console.log("You are subscribed!");
        checkthebox = true; 
    }
    else if(mycheckbox.checked ==false && ((Visa.checked) || (Master.checked) || (Paypal.checked))){
        console.log("Please check the subscribe box to subscribe");
        forgot_to_check= true;
    }
    else if(checkthebox==false){
        console.log("You are not subscribed!");
    }
    if(Visa.checked&&checkthebox){
        console.log("You are paying with a Visa!");
    }
    else if(Master.checked&&checkthebox){
        console.log("You are paying with a Mastercard!");
    }
    else if(Paypal.checked&checkthebox){
        console.log("You are paying with PayPal!");
    }
    else if(forgot_to_check==false&&checkthebox==true){
        console.log("You must select a payment type!");
    }
}