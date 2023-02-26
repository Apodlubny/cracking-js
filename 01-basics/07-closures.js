/* 
приклад використання замикання в каунтері */

function createCounter() {
  let value = 0;
  return {
    value,
    increment() {
      value += 1;
    },
    decrement() {
      value -= 1;
    },
    getValue() {
      console.log(value);
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

// приклад 2

function makeGreeting(name) {
  const message = `Hello, ${name}!`;

  function greet() {
    console.log(message);
  }

  return greet;
}

const greetJohn = makeGreeting("John");
const greetJane = makeGreeting("Jane");

greetJohn(); // Output: Hello, John!
greetJane(); // Output: Hello, Jane!
