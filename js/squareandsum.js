console.log("SQUARE(N)SUM");
// Complete the square sum function
// so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const result = numbers.map((number) => number * number);
  const sumOf = result.reduce((a, b) => a + b);
  return sumOf;
}

console.log(squareSum([0, 1, 2, 0, 2]));
console.log(squareSum([-6, -10, 19, 17, 14, 10, -17, -7]));
console.log(squareSum([2]));
console.log(squareSum([]));
