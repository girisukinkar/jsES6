//You are given a utility function pipeline that takes multiple functions as arguments and returns a new function. This new function applies the given functions in sequence, passing the output of one function as the input to the next.

// Your task is to complete the function pipeline so that it behaves as described above.
// function pipeline(...fns) {
//   return function(arg) {
//     // Complete the function logic here
//   };
// }


// Answer

function pipeline(...fns) {
  return function(arg) {
    for (let i = 0; i <= fns.length; i++) {
        return fns(arg)
    }
  };
}