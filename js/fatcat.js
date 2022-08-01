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
  if (input === undefined || input === null || input === 0) {
    return [];
  }
  function isPos(value) {
    return value > 0;
  }
  function isNeg(value) {
    return value <= 0;
  }
  const pos = input.filter(isPos);
  positiveLength = pos.length;
  const neg = input.filter(isNeg);
  negativeSum = neg.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (positiveLength === 0 && negativeSum === 0) {
    return [];
  } else return [positiveLength, negativeSum];
}

console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives());
console.log(countPositivesSumNegatives([]));

console.log(countPositivesSumNegatives([0]));

console.log(countPositivesSumNegatives([2, 3, 4, 5, -3, 3, -3]));

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

function anotherCountPositivesSumNegatives(input) {
  const quickMaths = input.reduce(function (a, b) {
    return a + b;
  }, 0);
  return quickMaths;
}
console.log(anotherCountPositivesSumNegatives([2, 3, 4, 5, -3, 3, -3]));

/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
*/

function century(year) {
  const what = Math.ceil(year / 100);
  return what;
}
console.log(century(1901));
console.log(century(1900));
console.log(century(2022));
console.log(century(1501));

console.log("KM/h to CM/s");
/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/
function cockroachSpeed(s) {
  const cmPerSecond = (s * 100000) / 60 / 60;
  return Math.floor(cmPerSecond);
}
console.log(
  `a cockroach moving at 1km/h is ${cockroachSpeed(1)}cm per second!`
);
