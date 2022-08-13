/*
TASK:
Given a non-negative integer,
3 for example,
Return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/

console.log("COUNTING SHEEP");

// FIRST METHOD:
function countSheep(num) {
  const arr = Array.from({ length: num }, (v, i) => i + 1);
  const counting = arr.map((numbarino) => `${numbarino} sheep...`).join("");
  return counting;
}
console.log(countSheep(9));

// SECOND METHOD:
function moreSheep(num) {
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const sheepArray = range(1, num, 1);
  const sheepCounting = sheepArray
    .map((howMany) => `${howMany} sheep...`)
    .join("");
  return sheepCounting;
}

console.log(moreSheep(4));
