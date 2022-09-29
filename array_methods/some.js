// some - Is there one that fulfills what I am going to tell you now? True or False.

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

const postById = posts.some(post => post.id === 1);
console.log(postById);

const postByIdNo = posts.some(post => post.id === 18);
console.log(postByIdNo);
