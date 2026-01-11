/*
function <function name>(params){
//function logic
}
*/
// reusable function
function add(a, b) {
  return a + b;
}

//function call
console.log(add(2, 3));
console.log(add(5, -10));

//local variable: a and b inside main are local variable and thier scope is only inside main
function main() {
  a = 10;
  b = 20;
  let sum = add(a, b);
  console.log(sum);
}

main();

//global variable
let first = 10;
let second = 5;
console.log(add(first, second));

function greet() {
  result = add(first, second); //first and second are global variables so can be accessed directly
  console.log("the addition of first and second is: " + result);
}

greet();
