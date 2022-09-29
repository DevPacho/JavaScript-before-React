// filter - Return an array from another array with only one condition to filter on.

const posts = [{
  id: 1,
  title: 'First post',
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
}, {
  id: 4,
  title: 'Third post',
  tags: ['JavaScript', 'vue']
}];

const onlyTalksAboutWebDev = posts.filter(post => post.tags.includes('Web-development'));
console.log(onlyTalksAboutWebDev);

const onlyUrlExists = posts.filter(post => post.url !== undefined);
console.log(onlyUrlExists);
