/* The asynchrony is a process that we can find for example, when we make
a data request to an API or URL that is on the Internet, because the response
time of this request may contain some delay since we do not have this data locally. */

// Let's see an example with 'Promises'

const books = [{
  id: 1,
  title: 'Aprendiendo JavaScript',
  year: '2021',
  author: 'Carlos Azaustre'
}, {
  id: 2,
  title: 'React.js Práctico',
  year: '2022',
  author: 'Carlos Azaustre'
}, {
  id: 3,
  title: 'Clean JavaScript',
  year: '2020',
  author: 'Miguel A. Gómez'
}];

function getData () {
  return new Promise((resolve, reject) => {
    if (books.length === 0) {
      reject(new Error('No data!'));
    }
    setTimeout(() => {
      resolve(books);
    }, 2000);
  });
}

getData()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));
