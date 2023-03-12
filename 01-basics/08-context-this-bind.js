/* Контекст виконання функції:
Контекст виконання функції визначається в момент
 виклику функції і вказує на об'єкт, на якому викликається метод.
  Наприклад, в наступному коді this вказує на об'єкт person: */

const person = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // logs "Hello, my name is John."

/* 
call та apply:
Методи call та apply дозволяють викликати функцію з заданим контекстом
 і передати аргументи у вигляді масиву або як окремі аргументи.
 */

function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

const person1 = {
  name: 'John',
};

greet.call(person1); // logs "Hello, my name is John."
greet.apply(person1); // logs "Hello, my name is John."

/* 
Різниця між call та apply полягає у тому, як передаються аргументи.
 З call аргументи передаються як окремі аргументи, а з apply вони передаються як масив. */

function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // logs 3
console.log(add.apply(null, [1, 2])); // logs 3
/* 
bind:
Метод bind повертає нову функцію, яка має заданий контекст виконання і фіксовані аргументи. */

function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

const person2 = {
  name: 'John',
};

const johnGreet = greet.bind(person);

johnGreet(); // logs "Hello, my name is John."
/* 
Функція johnGreet має фіксований контекст person, тому виклик johnGreet()
 еквівалентний виклику greet() з контекстом person. Крім того, можна передати
  додаткові аргументи, які будуть зафіксовані в новій функції: */

function add(a, b) {
  return a + b;
}

const addFive = add.bind(null, 5);

console.log(addFive(3)); // logs 8
