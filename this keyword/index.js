// this = reference to a particular object(refering to the object working with)
//        the object depends on the immediate context


const car = {
    model:"Mustang",
    color:"Red",
    year: 2023,
    drive : function(){
        //console.log(`You drive the ${model}`); // wrong
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}

const car2 = {
    model:"Corvette",
    color:"blue",
    year: 2023,
    drive : function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}


console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();