// static = belongs to the class, nnot the objects
//            properties: useful for caches, fixed configuration
//            methods : useful for utility functions

class Car{
    static numberofcars = 0;
    constructor(model){
        this.model = model;
        Car.numberofcars +=1;
    }
    static startrace(){
        console.log("3....2...1...GO!");
    }
};

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
console.log(Car.numberofcars);
Car.startrace();
