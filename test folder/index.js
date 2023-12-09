let civilian = [];

let Button = document.querySelector("#button1");

Button.addEventListener("click", function1);

function function1() {
    // Select all input elements
    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        // Create a new instance of the civilian class and push it into the civilian array
        let person = new Human(input.value);

        person.name = person.name.replace(person.name.charAt(0), person.name.charAt(0).toUpperCase());

        civilian.push(person);
    });

    console.log(civilian);
    console.log(civilian[1]);
}

class Human {
    constructor(name) {
        this.name = name;
    }
    /*study(){
        console.log(`${this.name} is studying`);
    }*/
}
