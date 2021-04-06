const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];


//Using reduce function

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
    console.log({accumulator,currentValue});
    return accumulator + currentValue ;
    } ;

// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));

//How the reducer works?
// IT RETURNS SINGLE OUTPUT
// When a reducer runs it returns the output to the accumulator and the accumulator remembers it across the iteration life
/* 
for example

now the accumulator is 0 
then it becomes  
*/

const flatter = (total, current) =>{
    console.log({total, current});
    if(Array.isArray(current)){
        current.reduce(flatter,total);
    }else{
        total.push(current)
    }
    return total;
}

const result = numArray.reduce(flatter, []); 
const noDuplicates = [...new Set(result)];
const sortedArray = noDuplicates.sort((a,b) => a-b);
console.log(sortedArray);
