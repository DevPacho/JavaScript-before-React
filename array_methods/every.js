// every - In all posts the attribute X includes another X?

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

const vueExistsInAll = posts.every(post => post.tags.includes('vue'));
console.log(vueExistsInAll);

const jsExistsInAll = posts.every(post => post.tags.includes('JavaScript'));
console.log(jsExistsInAll);
