// inheritance = a child class can inherit all the methods and properties from another class

class animal{
    alive = true;
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
    eat(){
        console.log(`this ${this.name} is eating`);
    }
} 


 class Rabbit extends animal{
    //alive = true;
    name ="rabbit";
    /* eat(){
        console.log(`this ${this.name} is eating`);
    }*/
    run(){
        console.log(`this ${this.name} is running`);
    }
    /*sleep(){
        console.log(`this ${this.name} is sleeping`);
    }*/
}

class Fish extends animal{
    //alive = true;
    name ="fish";
    /*eat(){
        console.log(`this ${this.name} is eating`);
    }*/
    swim(){
        console.log(`this ${this.name} is swimming`);
    }
    /*sleep(){
        console.log(`this ${this.name} is sleeping`);
    }*/
}

class Hawk extends animal{
    //alive = true;
    name ="hawk";
    /*eat(){
        console.log(`this ${this.name} is eating`);
    } */
    fly(){
        console.log(`this ${this.name} is flying`);
    }
    /*sleep(){
        console.log(`this ${this.name} is sleeping`);
    }*/
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
console.log(rabbit.alive);
console.log(rabbit);
console.log(rabbit.sleep()); 

