// Want to add all the numbers of an array that are positive

function positiveSum(arr) {
  //console.log(arr);
  arr = arr.filter((arr) => arr > 0);
  //console.log(arr);
  console.log(arr.reduce((a, b) => a + b, 0));
}

positiveSum([33, 52, 23, 3, -22, -5324]);
// expected result: 111

//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
