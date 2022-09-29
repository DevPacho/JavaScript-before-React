// Unpack values from arrays, or properties from objects, into distinct variables.

const square = {
  width: 17,
  height: 18
};

/* Traditional way */

function Area (square) {
  return square.width * square.height;
}

/* Destructuring approach */

function areaDestructuring (square) {
  const { width, height } = square;
  return width * height;
}

/* Another destructuring approach */

function areaDestructuring2 ({ width, height }) {
  return width * height;
}

console.log(Area(square));
console.log(areaDestructuring(square));
console.log(areaDestructuring2(square));

/* In REACT! */

function Avatar ({ username, url }) {
  return <img src={url} alt={username} />;
}

Avatar();
