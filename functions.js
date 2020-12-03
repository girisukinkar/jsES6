//Regular Function
//Breakdown the sum keyword is the variable name assigned by function name and it returns the value
function sum(a, b) {
  return a + b;
}

//Arrow function
//Breakdown: in arrow function you have to delcare a variable eg sum. and if the function has only one statement it automatically returns it,
//Hence no need to write return statement or curly braces
let sum2 = (a, b) => a + b;

//Arrow function is good to write anonymouse function
document.addEventListener("click", function () {
  console.log("click");
});

//This can also be written in arrow way
document.addEventListener("click", () => {
  console.log("click");
});

//SCOPE OF BOTH FUNCTIONS
//Arrow is useful inside class because

class Employee {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    //Anonymous arrow function
    setTimeout(() => {
      console.log(`Employee name ${this.name}`);
    }, 100);
  }

  printNameRegular() {
    setTimeout(function () {
      console.log(`Employee name ${this.name}`);
    }, 100);
  }
}

const employee = new Employee("Girish");
employee.printNameArrow(); // Output : Employee name Girish
employee.printNameRegular(); // Output : Employee name

//Because the arrow function stays in the class scope whereas the regular function takes the scope where it is defined
//In this case the Global scope and there is no this.name in the global scope
