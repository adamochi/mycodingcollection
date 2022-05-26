function positiveSum(arr) {
  console.log(arr);
  arr = arr.filter((arr) => arr > 0);
  console.log(arr);
  console.log(arr.reduce((a, b) => a + b, 0));
}

positiveSum([33, 52, 23, 3, -22, -5324]);
// expected result: 111
