/* Hoisting - можливість використовувати змінну до її обявлення */

// Приклад function declaration
makeMessage();
function makeMessage() {
  return "works";
}
// такий код спрацює
