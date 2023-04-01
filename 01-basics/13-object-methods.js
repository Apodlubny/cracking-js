/* 
Методи об'єктів - це функції, які використовуються для взаємодії з властивостями об'єкта або виконання дій,
 пов'язаних з об'єктом. У JavaScript існує багато вбудованих методів для роботи з різними типами даних та об'єктами.

 */

//Object.keys() - повертає масив з назвами властивостей об'єкта.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

const keys = Object.keys(person);
console.log(keys); // ['firstName', 'lastName', 'age', 'city']
//У цьому прикладі ми використали метод Object.keys() для отримання масиву назв властивостей об'єкта person.

//Object.assign() копіює значення властивостей з одного або декількох об'єктів в інший об'єкт.
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };

const mergedObject = Object.assign({}, object1, object2);

console.log(mergedObject); // {a: 1, b: 4, c: 5, d: 6}
//У цьому прикладі ми використали метод Object.assign() для об'єднання двох об'єктів в один об'єкт.
//Перший аргумент методу є порожнім об'єктом, який буде використовуватися як базовий об'єкт для об'єднання.
// Метод повертає новий об'єкт, що містить значення властивостей обох початкових об'єктів.

//Object.freeze() - заморожує об'єкт, що робить його властивості незмінними

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

Object.freeze(person2);

person2.firstName = 'Jane';
console.log(person2); // { firstName: 'John', lastName: 'Doe' }
