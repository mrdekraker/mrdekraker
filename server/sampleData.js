// sample users
const users = [
  {
    id: '1',
    firstName: 'Bob',
    lastName: 'Belcher',
    email: 'bb@bobsburgers.com',
    password: 'burgers',
  },
  {
    id: '2',
    firstName: 'Linda',
    lastName: 'Belcher',
    email: 'lb@bobsburgers.com',
    password: 'burgers',
  },
  {
    id: '3',
    firstName: 'Tina',
    lastName: 'Belcher',
    email: 'tb@bobsburgers.com',
    password: 'burgers',
  },
  {
    id: '4',
    firstName: 'Gene',
    lastName: 'Belcher',
    email: 'gb@bobsburgers.com',
    password: 'burgers',
  },
  {
    id: '5',
    firstName: 'Louise',
    lastName: 'Belcher',
    email: 'louiseb@bobsburgers.com',
    password: 'burgers',
  },
];

// sample blog posts
const posts = [
  {
    id: '1',
    title: "Bob's Burgers",
    content:
      'Bob Belcher is a third-generation restaurateur who runs Bob\'s Burgers with the help of his wife and their three kids. Bob and his quirky family have big ideas about burgers, but fall short on service and sophistication. Despite the greasy counters, lousy location and a dearth of customers, Bob and his family are determined to make Bob\'s Burgers "grand re-opening" a success.',
    userId: '1',
  },
  {
    id: '2',
    title: "Linda's Blog",
    content:
      "Linda Belcher is the wife of Bob Belcher and the mother of Tina, Gene and Louise. She is a stay-at-home mom who is very involved in her children's lives. She is a very caring and loving mother, but she is also very strict and overprotective. She is also very protective of her family's restaurant, Bob's Burgers, and is very concerned about its success.",
    userId: '2',
  },
  {
    id: '3',
    title: "Tina's Blog",
    content: `If you're a fan of Bob's Burgers, you probably have a soft spot for Tina Belcher. She's the oldest daughter of the Belcher family, but she often feels overshadowed by her more extroverted siblings, Gene and Louise. Despite her shyness and awkwardness, Tina has become a beloved character on the show, thanks in large part to her unique sense of humor and relatable struggles. In this post, we'll explore why Tina is such a beloved character and what makes her stand out from the crowd.`,
    userId: '3',
  },
];

// sample comments
const comments = [
  {
    id: '1',
    postId: '1',
    content: 'I love this show!',
    userId: '2',
  },
  {
    id: '2',
    postId: '1',
    content: 'Me too!',
    userId: '3',
  },
  {
    id: '3',
    postId: '1',
    content: 'It needs more music!',
    userId: '4',
  },
];

module.exports = { users, posts, comments };
