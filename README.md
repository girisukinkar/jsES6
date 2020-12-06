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
