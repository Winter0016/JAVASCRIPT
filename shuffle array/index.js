let cards =["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
shuffle(cards)
//cards.forEach(card => console.log(card))
cards.forEach(print);
console.log(cards);
function shuffle(array){
    let currentindex = array.length;
    while(currentindex!=0){
        let randomindex = Math.floor(Math.random()*array.length)
        currentindex -=1;
        let temp = array[currentindex];
        array[currentindex]=array[randomindex];
        array[randomindex]=temp;
    }
    return array;
}
function print(card /*each element in array will be named as "card" */){
    console.log(card);
}