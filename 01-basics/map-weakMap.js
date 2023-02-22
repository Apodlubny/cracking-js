/* Map - структура даних(колекція) схожа на обєкт (має ключ та значення)
Будь які типи (як примітивні так і обєкти) можуть бути ключами або значенням
WeakMap - як Map але ключами можуть бути тілки обєкти */

const map = new Map([
  ["bill", 1],
  ["bob", 2],
]);
console.log(map);
map.size; //2
/*
 в консолі буде обєкт з ключами bill та bob і відповідно значеннями 1 та 2
 */
const dog = {};
map.set(dog, "some string");
console.log(map); //приклад коли ключем map буде обєкт
map.get(dog); //так отримуємо посилання в памяті на ключ мепу

//WeakMap
const weakMap = new WeakMap();
const obj = { name: "Andrew" };
weakMap.set(obj, 123);

console.log(weakMap);
