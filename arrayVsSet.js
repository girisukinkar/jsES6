/**
 * If the requirement is to never have a duplicate in the structure you can use Set
 * 
 */


const numbers = new Set();
numbers.add(1)
numbers.add(2)
console.log(numbers)

numbers.add(1)
console.log(numbers)

// Sets cannot be accessed by index but it can be iterated using forEach or by converting it to an array [...numbers]
// it is faster than array