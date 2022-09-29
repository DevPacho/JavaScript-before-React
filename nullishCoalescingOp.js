// New alternative to check if something is null, replaces the ternary operators.

/* With ternary ops */

function sum (a, b) {
  a = a == null ? 0 : a;
  b = b == null ? 0 : b;

  return a + b;
}
console.log(sum(3, 3));
console.log(sum(3));
console.log(sum());

/* With nullish coalescing ops */

function sumNCO (a, b) {
  a = a ?? 0;
  b = b ?? 0;

  return a + b;
}
console.log(sumNCO(3, 3));
console.log(sumNCO(3));
console.log(sumNCO());

// In REACT!

function Avatar ({ user }) {
  return <img src={user.imageUrl ?? 'https://imagesource.com'} />;
}

Avatar();
