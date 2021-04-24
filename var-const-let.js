//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// Var is always in in Global/ local or function scope

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

  //this outputs 3 3 3; because the i is in global scope and after the for is over and setTimeout returns the value is 3

//The fix is let
// variable declared with let has block scope { } which means each iteration creates a new copy of the variabel and each value is scoped inside the loop
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

