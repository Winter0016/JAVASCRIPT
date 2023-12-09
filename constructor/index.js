/*class student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("Spongebob",30,3.2);
const student2 = new student("Patrick",22,4.2);
console.log(student1);
console.log(student1.name);
student1.study();
console.log(student2);
*/


// using constructor for inheritance folder:

class Animal{
    constructor(name,move){
        this.name = name;
        this.alive = true;
        this.move = move;
    }
    eat(){
        console.log(`${this.name} is studying!`);
    }
    sleep(){
        console.log(`${this.name} is sleeping!`);
    }
    movingmethod(){
        if(this.move=="fly"){
            console.log(`${this.name} is flying`);
        }
        else if(this.move=="swim"){
            console.log(`${this.name} is swimming`);
        }
        else{
            console.log(`${this.name} is running`);
        }
    }
}
const hawk = new Animal ("Hawk","fly");
const rabbit = new Animal("Rabbit","run");
const shark = new Animal("Shark","swim");
console.log(hawk);
console.log(rabbit);
console.log(shark);
hawk.movingmethod();
rabbit.movingmethod();
shark.movingmethod();
