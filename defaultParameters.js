// Default variables value

/* Traditional way */

function sum (a, b) {
  if (a === undefined || b === undefined) {
    console.log('Please enter only 2 values');
    return;
  }

  return a + b;
}

/* Implementing default parameters */

function sumInitializated (a = 0, b = 0) {
  return a + b;
}

console.log(sum());
console.log(sum(17));
console.log(sumInitializated());
console.log(sumInitializated(17));
