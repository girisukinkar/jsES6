class Human {
    gender = "male";
    printGender = () => {
        console.log(this.gender);
    }
}
//OLD type
/* class Person extends Human { 

    constructor(){
        super();
        this.name  = "Girish";
        this.age =  27
    }

    printName(){
        console.log(`Person ${this.name} gender is ${this.gender}`);
        console.log(this.name);
    }
    printAge = () => {
        console.log(this.age);
    }
} */

//New ES6 way to do it : No constructor no super()
class Person extends Human { 
     name  = "Girish";
     age =  27

    printName = () => {
        console.log(`Person ${this.name} gender is ${this.gender}`);
        console.log(this.name);
    }
    printAge = () => {
        console.log(this.age);
    }
}

const person = new Person();
person.printGender();
person.printName();
person.printAge();