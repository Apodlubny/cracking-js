/* 
Оператор && (and)повертає перше значення false або останнє значення true */
1 && 2 && 3; //поверне 3
1 && 0 && 2; // поверне 0
let obj = {
  name: "Bill",
  dog: {
    name: "Hugo",
  },
};
// найчастіше оператори використовуються в умовах та розгалуженнях
if (obj.cat && obj.cat.name) {
  console.log("works");
}
// те ж саме можна зробити за допомогою optional chaining оператора
if (obj.cat?.name) {
  console.log("works");
}

/* 
оператор || (or) повертає перше значення true або останнє false */
0 || 2 || 3; //2
0 || false || null || 0; //0

/* Тернарний оператор (? :) має на меті замінити несладні конструкції if */
//без тернарного оператора
if (obj.dog.name === "Hugo") {
  console.log("works");
}
// з тернарним
const dogName = obj.dog.name === "Hugo" ? "Hugo" : "New dog";

/* Ще раз про chaining operator  */
//замість цього...
function test(names) {
  const arrayOfNames = names && names.length && names.map(({ name }) => name);
  return arrayOfNames;
}
//можна писати так...
function test2(names) {
  const arrayOfNames = names?.map((name) => name);
  return arrayOfNames;
}
console.log(test2());
console.log(test2([]));
console.log(test2([{ name: "Bill" }, { name: "Bob" }]));
