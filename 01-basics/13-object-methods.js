/* 
Методи об'єктів - це функції, які використовуються для взаємодії з властивостями об'єкта або виконання дій,
 пов'язаних з об'єктом. У JavaScript існує багато вбудованих методів для роботи з різними типами даних та об'єктами.

 */

//1. Object.keys() - повертає масив з назвами властивостей об'єкта.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

const keys = Object.keys(person);
console.log(keys); // ['firstName', 'lastName', 'age', 'city']
//У цьому прикладі ми використали метод Object.keys() для отримання масиву назв властивостей об'єкта person.

//2. Object.values() - повертає масив зі значеннями властивостей об'єкта.
const person3 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

const values = Object.values(person3);
console.log(values); // ['John', 'Doe', 30, 'New York']

//3. Object.entries() - повертає масив масивів, де кожен вкладений масив містить пару ключ-значення для кожної властивості об'єкта.

const person4 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

const entries = Object.entries(person4);
console.log(entries);
// [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30], ['city', 'New York']]

//4. Object.assign() копіює значення властивостей з одного або декількох об'єктів в інший об'єкт.
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };

const mergedObject = Object.assign({}, object1, object2);

console.log(mergedObject); // {a: 1, b: 4, c: 5, d: 6}
//У цьому прикладі ми використали метод Object.assign() для об'єднання двох об'єктів в один об'єкт.
//Перший аргумент методу є порожнім об'єктом, який буде використовуватися як базовий об'єкт для об'єднання.
// Метод повертає новий об'єкт, що містить значення властивостей обох початкових об'єктів.

//5. Object.freeze() - заморожує об'єкт, що робить його властивості незмінними

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

Object.freeze(person2);

person2.firstName = 'Jane';
console.log(person2); // { firstName: 'John', lastName: 'Doe' }

//6. Object.create() - створює новий об'єкт, використовуючи існуючий об'єкт як прототип.
const person7 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

const newPerson = Object.create(person7);
newPerson.firstName = 'Jane';

console.log(newPerson.firstName); // 'Jane'
console.log(newPerson.lastName); // 'Doe'
console.log(newPerson.age); // 30
console.log(newPerson.city); // 'New York'
