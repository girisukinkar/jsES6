//How to check if value is integer

const num = 1203;
console.log(Number.isInteger(num));

/*If you want the number to remain in INTEGER range
Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992. */
console.log(Number.isSafeInteger(num));