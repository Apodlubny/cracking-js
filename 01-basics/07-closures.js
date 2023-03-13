/* 
Замикання (closure) в JavaScript - це функція, яка запам'ятовує доступ до змінних у своєму лексичному оточенні,
незалежно від того, де вона була викликана.
У більш простих словах, замикання дозволяє функції використовувати змінні, які не знаходяться в її власному області видимості.
Замикання створюється, коли функція повертається з іншої функції або коли функція вкладена всередині іншої функції.
Ось кілька прикладів використання замикань:
Збереження значення змінної між викликами функції: */

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const countFunction = counter();

countFunction(); // 1
countFunction(); // 2
countFunction(); // 3

// Створення приватних змінних для об'єктів:
function createPerson(name, age) {
  let privateName = name;
  let privateAge = age;

  return {
    getName() {
      return privateName;
    },
    setName(name) {
      privateName = name;
    },
    getAge() {
      return privateAge;
    },
    setAge(age) {
      privateAge = age;
    },
  };
}

const person = createPerson('John', 30);

console.log(person.getName()); // "John"
person.setName('Jane');
console.log(person.getName()); // "Jane"
console.log(person.getAge()); // 30
person.setAge(35);
console.log(person.getAge()); // 35

// Використання замикань для створення генераторів:
function createGenerator() {
  let number = 0;

  return function () {
    number++;
    return number;
  };
}

const generator = createGenerator();

console.log(generator()); // 1
console.log(generator()); // 2
console.log(generator()); // 3

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

const greetJohn = makeGreeting('John');
const greetJane = makeGreeting('Jane');

greetJohn(); // Output: Hello, John!
greetJane(); // Output: Hello, Jane!
