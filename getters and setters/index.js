// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
    constructor(power){
        this._gas=25;
        this._power = power;
    }
    get power(){ // this is kinda const , we do not have access to this property, its only for read(mostly for security) // its also used to store result or something
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){      // limit the input for gas
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);
let motor = new Car(900)

car.gas = 40; // applying set gas(value)

console.log(car.power);
console.log(car.gas);
console.log(motor.gas);