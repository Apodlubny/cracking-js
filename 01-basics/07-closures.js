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
