# Lastest Javscript ES6 features

Learning core javascript feature to write good efficient readable code via scrimba.com
ES6 goal is to write less code but make it more readable at the same time.

### `09-March-2020`

Used string literals that makes concatenation and using variables much easy and looks clean.
Also destructuring of objects and Array.

### `14-March-2020`

Object literals, if inside the function the Key and property value has same name then we can directly use f(city){ const xyz = {city}} instead of f(city) { const xyz = {newCity:city} }

### `18-May-2020`

Revisioned promises , callbacks and new async await which is actually syntactical sugar for .then .catch to write synchronous code

### `20-May-2020`

Arrow vs Regular Functions, their scope, minimalistic approach and clean way to write functions
> ``` let xyz = () => { } AND function xyz() { } ```

## DOM manipulation is Expensive for Eg.
    
     You can append elements in the loop continuosly or keep them ready and append all
 ``` javascript
//BAD CODE : costs 33ms
for(let i=0; i< 10000; i++){
  const p = document.createElement('p');
  document.body.appendChild(p); //manipulating dom every on every interation is costly
}

 //GOOD CODE: costs 20ms
 const fragment = document.createDocumentFragment();
for(let i=0; i< 10000; i++){
  const p = document.createElement('p');
  fragment.appendChild(p);
}
  document.body.appendChild(fragment);
   ```

## some and every functions

  Both some and every function will return boolean, as per their name some will check if atleast one is true and every checks if everything satisfies the condition

``` javascript
  const userExists = users.some(user => user.id === 1);
  const allRegistered = users.every(user => user.status === 'registered');
```


## find function    

  It returns single value/object as per the condition

```javascript
const user = users.find(user => user.id ===2 )
//Output : {id: 2, name: "Devil", complete: true} even if there are 100s of user with id 2 or name Devil
```


## What is default export
	
   we can use alias for the function or object we exported eg. import prs from './person.js' where in person.js the export was export default person;

## What is named export

   we cannot rename the methods or properties which are exported eg. export const name = 'Girish';
	we need to use 
```javascript 
import name from './person.js';
```

## Can we extend class and access the derived class properties and values?

  Yes we can access the derived class values but before calling the methods or properties we need to use super(); in our parent constructor 

```javascript 
class Person extends Human { 

    constructor(){
        super();
        this.name  = "Girish";       
    }

    getValueOfOtherClass(){
      console.log(`Hi i am the property of Human class ${this.gender});
    }
}
```
  Note : we can modify the properties inside the parent constructor eg this.gender = "new value";

## Deep copy 

  when JavaScript objects including arrays are deeply nested, the spread operator only copies the first level with a new reference, but the deeper values are still linked together. So inorder to make a change in the new copy of it we need deep copy.

  To make deep copy use library called loadash or ramada or make custom function

```javascript 
    E.g const obj = { name : "Girish" , age: 27};
          const copyObj = obj // Shallow copy
          obj.name = "Dexter"
          console.log(copyObj.name) //Dexter
```

## Closures

    A function along who can access its outer lexical scope forms a closure.