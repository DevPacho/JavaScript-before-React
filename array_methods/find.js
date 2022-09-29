// find - Search for an element from a given pattern.

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

const postById = posts.find(post => post.id === 1);
console.log(postById);

const postByTitle = posts.find(post => post.title === 'Second post');
console.log(postByTitle);
