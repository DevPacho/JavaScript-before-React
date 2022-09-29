/* reduce - For example, create an array that includes all the tags we are using,
receives an accumulator and the element we are iterating as parameters. */

const posts = [{
  id: 1,
  title: 'First post',
  url: 'https://example.myposts.com/1',
  tags: ['JavaScript', 'Web-development']
}, {
  id: 2,
  title: 'Second post',
  url: 'https://example.myposts.com/2',
  tags: ['JavaScript', 'Web-development', 'react']
}, {
  id: 3,
  title: 'Third post',
  url: 'https://example.myposts.com/3',
  tags: ['JavaScript', 'Web-development', 'vue']
}];

/* Return a new array containing a copy of all tags and
concatenate with the current post and its tasks.

Line 29 - We initialize an empty array so that 'allTags' is understood to be an array. */

const tags = posts.reduce((allTags, post) => {
  return [...allTags, ...post.tags];
}, []);

console.log(tags);

/* No repeated elements, (in this case labels) */

const uniqueTags = posts.reduce((allTags, post) => {
  return Array.from(new Set([...allTags, ...post.tags]));
}, []);

console.log(uniqueTags);
