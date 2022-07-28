console.log("SEARCH FOR THE WILSON PRIME");

function factorial(num) {
  return num <= 1n ? 1n : num * factorial(num - 1n);
}

function amIWilson(p) {
  p = BigInt(p);
  return (factorial(p - 1n) + 1n) % (p * p) == 0n ? true : false;
}

console.log(amIWilson(5));
console.log(amIWilson(6));
console.log(amIWilson(13));
console.log(amIWilson(12));
console.log(amIWilson(563));

// function amIWilson(number) {
//   /*
//     // only know wilson prime numbers are 5, 13, 563...
//   if (p === 5 || p === 13 || p === 563) {
//     return true;
//   } else return false;
// */
//   p = BigInt(number);
//   const numberToFactorial = p - 1n;
//   const factorial = function fac(n) {
//     return n < 2n ? 1n : n * fac(n - 1n);
//   };
//   const facta = factorial(numberToFactorial);

//   const partA = facta + 1n;
//   console.log(`partA is ${partA}`);
//   console.log(partA);

//   const partB = p * p;
//   console.log(`partB is ${partB}`);

//   const answer = partA / partB;
//   console.log(`answer is ${answer}`);

//   return `is it a whole number? ${Number.isInteger(answer)}`;
// }

/*
let a =
  57133839564458504888431685060296571931908532210186455865803960270646722738367142315408067529343188252533443527449112321315901238165762616382826568957034327205350825860530274233419660272647262828623211661421621408605336881542803886698113566366770204591606248505344n;
let b = 22801n;
console.log(typeof (a / b));
console.log(Number.isInteger(a / b));
console.log(typeof `${a / b}`);
*/
