console.log("RANDOM POTATO");
// can create a function that returns a function and then having separate counters that use the same function but will have there own states.
const potatoLauncher = () => {
  let conterStonky = 0;
  return () => {
    return conterStonky++;
  };
};
const alaskdjf = potatoLauncher();
const definufdsaiol = potatoLauncher();
const lkjsdflkjsdf = potatoLauncher();
console.log(alaskdjf()); // 0
console.log(alaskdjf()); // 1
console.log(alaskdjf()); // 2
console.log(alaskdjf()); // 3
console.log(alaskdjf()); // 4
console.log(definufdsaiol()); // 0
console.log(definufdsaiol()); // 1
console.log(definufdsaiol()); // 2
console.log(lkjsdflkjsdf()); // 0
console.log(alaskdjf()); // 5
console.log(alaskdjf()); // 6
console.log(alaskdjf()); // 7
console.log(alaskdjf()); // 8
console.log(alaskdjf()); // 9
console.log(alaskdjf()); // 10
console.log(alaskdjf()); // 11
console.log(alaskdjf()); // 12
console.log(alaskdjf()); // 13
console.log(alaskdjf()); // 14
console.log(alaskdjf()); // 15
