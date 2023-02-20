/* Hoisting - можливість використовувати змінну до її обявлення */

// Приклад function declaration
makeMessage();
function makeMessage() {
  return "works";
}
// такий код спрацює

// Приклад function expression

makeMessage();
const makeMessage = () => {
  return "works";
};
// такий код не спрацює оскільки в f expression hoisting не працює

//es5
/* Змінна обявлена без var буде обявлена в глобальному скоупі */
