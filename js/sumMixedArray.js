console.log("SUM MIXED ARRAY");

function sumMix(x) {
  console.log(x);
  const input = x.map((ass) => JSON.parse(ass));
  console.log(input);
  const quickMaths = input.reduce(function (a, b) {
    return a + b;
  }, 0);
  return quickMaths;
}
console.log(sumMix([9, 3, "7", "3"]));
