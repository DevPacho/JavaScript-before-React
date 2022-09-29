// The rest parameters...

/* Traditional concatenation */

const numbers = [1, 2, 3, 4, 5];
const numbersToAppend = [17, 18];

const allNumbers = numbers.concat(numbersToAppend);
console.log(allNumbers);

/* With 'spread' or 'THE REST...' operator */
/* This also works with objects in the same way */

const numbersRest = [1, 2, 3, 4, 5];
const numbersToAppendRest = [17, 18];

const allNumbersRest = [...numbersRest, ...numbersToAppendRest];
console.log(allNumbersRest);

// In REACT!

// Mmm..., no

function componentNo ({ id, name, username, idk }) {
  return <newComponent key={id} name={name} username={username} idk={idk} />;
}

// YES!

function componentYes ({ id, ...props }) {
  return <newComponent key={id} {...props} />;
}

componentNo();
componentYes();
