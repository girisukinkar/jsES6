class Human {
    constructor(){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human { 

    constructor(){
        super();
        this.name  = "Girish";
        
    }

    printName(){
        console.log(`Person ${this.name} gender is ${this.gender}`);
        console.log(this.name);
    }
}

const person = new Person();
person.printGender();
person.printName();