/* The asynchrony is a process that we can find for example, when we make
a data request to an API or URL that is on the Internet, because the response
time of this request may contain some delay since we do not have this data locally. */

/* Let's see an example with 'Async/Await', that is basically a sugar syntax, is
the same that use a promise, but is more readable, it looks like we are writing sequential code,
but it is really asynchronous code. */

const books = [{
  id: 1,
  title: "Aprendiendo JavaScript",
  year: "2021",
  author: "Carlos Azaustre",
}, {
  id: 2,
  title: "React.js Práctico",
  year: "2022",
  author: "Carlos Azaustre",
}, {
  id: 3,
  title: "Clean JavaScript",
  year: "2020",
  author: "Miguel A. Gómez",
}]

function getData() {
  return new Promise((resolve, reject) => {
    if (books.length === 0) {
      reject(new Error("No data!"))
    }
    setTimeout(() => {
      resolve(books)
    }, 2000)
  })
}

/* In older versions of node, we must use the syntax below because
we could not handle an await outside of an async type function. */

async function fetchingData() {
  const data = await getData()
  console.log(data)
}

fetchingData()

// With more updated versions of node, it is sufficient to use the "Top-Level await"...

const data = await getData()
console.log(data)
