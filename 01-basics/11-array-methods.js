/*
push() - Adds one or more elements to the end of an array and returns the new length of the array.
 */

const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
/* 
pop() - Removes the last element from an array and returns that element. */

const numbers2 = [1, 2, 3];
const lastNumber = numbers2.pop();
console.log(lastNumber); // 3
console.log(numbers2); // [1, 2]

/* 
shift() - Removes the first element from an array and returns that element. */
const numbers3 = [1, 2, 3];
const firstNumber = numbers3.shift();
console.log(firstNumber); // 1
console.log(numbers3); // [2, 3]

/* 
unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array. */

const numbers4 = [1, 2, 3];
numbers.unshift(0, -1);
console.log(numbers4); // [-1, 0, 1, 2, 3]

/* 
slice() - Returns a new array that contains a portion of the original array. */

const numbers5 = [1, 2, 3, 4, 5];
const slicedNumbers = numbers5.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]
console.log(numbers5); // [1, 2, 3, 4, 5]

/* splice() - Changes the contents of an array by removing or replacing existing elements
 and/or adding new elements. */

const numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(2, 2, 6, 7);
console.log(numbers6); // [1, 2, 6, 7, 5]

/* 
concat() - Returns a new array that is the result of concatenating two or more arrays. */

const numbers7 = [1, 2, 3];
const numbers8 = [4, 5, 6];
const concatenatedNumbers = numbers7.concat(numbers8);
console.log(concatenatedNumbers); // [1, 2, 3, 4, 5, 6]

/* 
indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present. */
const numbers9 = [1, 2, 3, 4, 5];
const index = numbers9.indexOf(3);
console.log(index); // 2
