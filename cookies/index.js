
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(something, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${something}=${value}; ${expires}; path=/`
    console.log(document.cookie);
}



function deleteCookie(name){
    setCookie(name, null, null);
}



function getCookie(name){
    console.log(`Name need to find: ${name}`);
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    console.log(`Carray: ${cArray}`);
    let result = null;
    
    cArray.forEach(element => {
        if(element.includes(name)){
            console.log(`element: ${element}`);
            console.log(`name found: ${name}`);
            console.log(`name.length: ${name.length}`);
            result = element.substring(name.length + 1)
        }
        console.log(`Result is: ${result}`);
    })
    return result;
}