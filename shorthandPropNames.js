// Shorthand property names in objects!
// Avoiding a key when its value has the same name.

const name = 'Pacho';
const age = 18;
const GitHub = 'https://github.com/DevPacho';

/* Without */

const me = {
  name: name,
  age: age,
  GitHub: GitHub
};

console.table(me);

/* With */

const meShorthand = {
  name,
  age,
  GitHub
};

console.table(meShorthand);

// In REACT!

function component ({ initialState, totalCount }) {
  const [state, setState] = useState({ initialState, totalCount });
}

component();
