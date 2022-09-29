// Check for the existence of nested attributes in "deep levels".

const user = {
  name,
  age,
  location: {
    x,
    y,
    city: {
      town,
      zipCode
    }
  }
};

/* Old validation JS and React */

const town = user.location.city.town;

// NO!
const validateTown = user && user.location && user.location.city && user.location.city.town;

// With optional chaining, YES!
const validateTownOC = user?.location?.city?.town;

// In REACT!

function User () {
  return <div>The town is: {user?.location?.city?.town}</div>;
}

User();
