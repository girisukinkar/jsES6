//Clean Code functions part 2

//1.Avoid side effects
//BAD PRACTICE
let name = "Girish Sukinkar";
function splitInfoFirstAndLastName() {
  let name = name.split(" "); //We are  mutating the name vairable
}
// console.log(name);

//GOOD PRACTICE
let fullName = "Girish Sukinkar";
function splitFirstAndLastName() {
  return fullName.split(" ");
}
const newName = splitFirstAndLastName(fullName);
console.log(newName);

//2. Don't write a global functions
//BAD PRACTICE
//Never add anything to Global functions as it can conflict with other libraries
// Array.prototype.diff = function diff(comparisonArray) {
//   console.log(this);
//   const hash = new Set(comparisonArray);
//   return this.filter((elem) => !hash.has(elem));
// };

//GOOD PRACTICE
//Make it a class and extend of GLOBAL ARRAY 

// class SuperArray extends Array{
//      diff(comparisonArray) {
//   console.log(this);
//   const hash = new Set(comparisonArray);
//   return this.filter((elem) => !hash.has(elem));
// }
// }

