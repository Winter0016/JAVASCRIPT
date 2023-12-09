let grades =[100,50,90,60,80,70];

grades = grades.sort(ascendingsort);

grades.forEach(print);

function decendingsort(x,y){
    return y - x;
}

function ascendingsort(x,y){
    return x - y;
}

function print(element){
    console.log (element);
}
