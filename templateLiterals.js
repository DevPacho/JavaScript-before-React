// Interpolation!

/* Old */

const why = 'Juliana';
const she = 'Sánchez';

console.log(why + ' ' + she);

/* New */

console.log(`${why} ${she}`);

// In REACT!

function component ({ backgroundColor }) {
  return <div className={`bg-color-${backgroundColor}`}>JSSC</div>;
}

component();
