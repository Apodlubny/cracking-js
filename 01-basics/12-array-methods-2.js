/* 
forEach() - Calls a function once for each element in the array. */

const numbers = [1, 2, 3];
numbers.forEach(number => {
  console.log(number * 2);
});
// Output:
// 2
// 4
// 6

/* 
map() - Creates a new array with the results of calling a provided function on every element in the array. */

const numbers1 = [1, 2, 3];
const doubledNumbers = numbers1.map(number => {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6]

/* 
filter() - Creates a new array with all elements that pass the test implemented by the provided function. */

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(number => {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

/* 
reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. */

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

/* sort() - Sorts the elements of an array in place and returns the sorted array. */

const numbers4 = [3, 1, 4, 2, 5];
numbers4.sort();
console.log(numbers4); // [1, 2, 3, 4, 5]

/* 
reverse() - Reverses the order of the elements in an array in place and returns the reversed array. */
const numbers5 = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers5); // [5, 4, 3, 2, 1]

/* join() - Joins all elements of an array into a string. */
const numbers6 = [1, 2, 3];
const stringNumbers = numbers6.join('-');
console.log(stringNumbers); // "1-2-3"

/* includes() - Determines whether an array includes a certain element, returning true or false as appropriate. */
const numbers7 = [1, 2, 3, 4, 5];
const includes3 = numbers7.includes(3);
console.log(includes3); // true
/* every() - Tests whether all elements in the array pass the test implemented by the provided function, returning true or false as appropriate. */
const numbers8 = [2, 4, 6, 8, 10];
const allEven = numbers8.every(number => {
  return number % 2 === 0;
});
console.log(allEven); // true

/* some() - Tests whether at least one element in the array passes the test implemented by the provided function, returning true or false as appropriate. */
const numbers9 = [1, 3, 5, 7, 8];
const hasEven = numbers9.some(number => {
  return number % 2 === 0;
});
console.log(hasEven); // true
