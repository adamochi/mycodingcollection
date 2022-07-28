/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
*/
function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "$" + salary * 10;
  } else return `$${salary}`;
}
console.log(bonusTime(200, true));
console.log(bonusTime(200, false));

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  function isPos(value) {
    return value >= 0;
  }
  function isNeg(value) {
    return value <= 0;
  }
  const pos = input.filter(isPos);
  const neg = input.filter(isNeg);
  return `[${pos} - ${neg}]`;
}
function anotherCountPositivesSumNegatives(input) {
  const quickMaths = input.reduce(function (a, b) {
    return a + b;
  }, 0);
  return quickMaths;
}
console.log(countPositivesSumNegatives([2, 3, 4, 5, -3, 3, -3]));
console.log(anotherCountPositivesSumNegatives([2, 3, 4, 5, -3, 3, -3]));
