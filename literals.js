//The new way of writing strings and concatenation

let first = "Girish";
let last = "Sukinkar";

//OLD way of concatenation
console.log(first + " " + last);

//New way of concatenation
console.log(`${first} ${last}`);

//OLD way of line break
const final = first + " \n " + last;
document.querySelector("p").innerText = final;

//NEW Way of line break
const fullName = `${first}
${last}`;
document.querySelector("p").innerText = fullName;
