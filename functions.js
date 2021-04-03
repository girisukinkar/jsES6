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



//TYPES OF FUNCTIONS

//function statement is also known as function declaration
function fnStatement(){
  console.log('This is function statement');
}

var fnExpression = () => {
  console.log('This is function expression');
}

//NOW WHAT IS THE DIFFERENCE BETWEEN BOTH?
/*  The answer is Hoisting 
if you call the function at the top of the file the fnStatement will return the output but fnExpression will throw Error as not defined as its not initialised yet
*/


//What is anonymous function :
/*  The function who does not have its own identity ,
Where do we use it ? 
We use them as values, like assigning a value to a variable, it can also invoked immediately as shown below
*/

(function () {
  console.log('This is anonymous function');
}());

//NAMED FUNCTION ExpRESSION
var fnNamedFunction = function someName(){
  console.log('THIS IS NAMED FUNCTION EXPRESSION');
}

// --------- WHAT IS FIRST CLASS FUNCTION ------------

//The ability to accept function as a parameter as well as can return a function

