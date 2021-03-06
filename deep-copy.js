// for objects and arrays containing other objects or array, copying these objects requires a deep copy. 
/*  Otherwise when you change a nested reference it will affect the copy of the object or array as well */

/*  Shallow copy works fine for an Object or array BUTTTT will fail for an array or object with nested reference to other objects or arrays*/

const regularArray = [[1],[2],[3]];
console.log('Normal Array',regularArray);

const nestedCopyWithSpread = [...regularArray];
//when JavaScript objects including arrays are deeply nested, the spread operator only copies the first level with a new reference, but the deeper values are still linked together
console.log('Copy of Regular Array', nestedCopyWithSpread);

//Changing the values
console.log('Changing value of first element to 10');
regularArray[0][0] = 10; //this will affect the nestedCopyWithSpread as well check it out
console.log('Normal Array',regularArray);
console.log('Copy of Regular Array', nestedCopyWithSpread);

const deepCopyOfRegularArray = deepCopyFunction(regularArray);
console.log('DEEP COPY', deepCopyOfRegularArray);
console.log('Changing values again');
regularArray[0][0] = 20;
console.log('Normal Array',regularArray);
console.log('DEEP COPY', deepCopyOfRegularArray);
//

const regularArrayWithObject = [1,3, { a : 'A'}];
console.log('Regular Array with Nested Object', regularArrayWithObject );
const nestedCopyOfRegularArrayWithObject = [...regularArrayWithObject];
console.log('Copy of Array with Nested Object ',nestedCopyOfRegularArrayWithObject);
regularArrayWithObject[2].a = 'AB';
console.log('Changing the values of Object now in RegularArrayWithObject');
console.log('Regular Array with Nested Object', regularArrayWithObject );
console.log('Copy of Array with Nested Object ',nestedCopyOfRegularArrayWithObject);



function deepCopyFunction(inObject) {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }