/* 
Типи даних
прості 
--boolean
--null
--undefined
--number
--string
--symbol

  складні
  --Object

 */

typeof {}; //в консолі покаже object
typeof []; //в консолі покаже object
let a = document.querySelector("div");
typeof a; //в консолі покаже object
typeof (() => {}); //в консолі покаже function але функція також являється обєктом

// boolean - true/false
// null - посилання на порожнє значення
typeof null; // в консолі буде object визнана розробниками помилка, яку не стали виправляти

// undefined  - тип який надається змінній, яка обявлена, але не ініцілізована(тобто не має заданого значення)
// number - виражає ціле або дробне число. Крім number є ще також спеціальні числові значення NaN(not a number) та infinity
+"123 +"; //в консолі буде NaN оскільки ми намагаємося зі строки зробити number
// string
// symbol служить для створення унікальних ідентифікаторів або приватної властивості обєкта
let b = Symbol("abc");

b === Symbol("abc"); //в консолі буде false
