// map - 'For' loop but in a declarative way (what do you want to do). In a traditional 'for' it is imperative.

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

/* Form an array with only object titles */

const onlyTitles = posts.map(post => post.title);
console.log(onlyTitles);
