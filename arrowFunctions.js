// Create functions in a cleaner way compared to regular functions.

function traditionalWay () {
  return 'This is the normal function';
}

/* Newest */

const arroyFunction = () => 'This is a better way!';

console.log(traditionalWay());
console.log(arroyFunction());

// In REACT!

function tasksList () {
  const list = [];
  return (
    <ul>
      {list.map(forAllElements, key => (<li>{forAllElements.example}</li>))}
    </ul>
  );
}

tasksList();
