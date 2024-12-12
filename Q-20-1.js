// Question 1: Closure-Based Counter Implementation
function createCounter() {
  let count = 0;
  function increament() {
    count++;
    console.log("increament count: " + count);
  }
  function decreament() {
    count--;
    console.log("decreament count: " + count);
  }
  function display() {
    console.log("Current count: " + count);
  }
  return {
    increament: increament,
    decreament: decreament,
    display: display,
  };
}
let counter = createCounter();
counter.display(); // Current count: 0
counter.increament(); // Count incremented to: 1
counter.increament(); // Count incremented to: 2
counter.decreament(); // Count decremented to: 1
counter.display();
