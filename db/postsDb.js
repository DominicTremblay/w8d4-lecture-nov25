const postsDb = {
  '1': {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium quae doloremque magnam nisi ipsam asperiores rem impedit aliquam. Ratione nisi libero ad provident, vero nihil nesciunt minima rerum dignissimos.',
    userId: '3',
  },
  '2': {
    id: '2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium quae doloremque magnam nisi ipsam asperiores rem impedit aliquam. Ratione nisi libero ad provident, vero nihil nesciunt minima rerum dignissimos.',
    userId: '2',
  },
  '3': {
    id: '3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium quae doloremque magnam nisi ipsam asperiores rem impedit aliquam. Ratione nisi libero ad provident, vero nihil nesciunt minima rerum dignissimos.',
    userId: '1',
  },
};

const usersDb = {
  '1': {
    id: '1',
    name: 'Sponge Bob',
    email: 'sponge@bob.com',
    password: 'test',
  },
  '2': {
    id: '2',
    name: 'Yoshi',
    email: 'yoshi@yoshi.com',
    password: 'test',
  },
  '3': {
    id: '3',
    name: 'Peach',
    email: 'peach@peach.com',
    password: 'test',
  },
};

const commentsDb = {
  '1': {
    id: '1',
    content:
      "The Safdie Brothers have meticulously created one of the year's most intentionally irritating films. ",
    postId: '1',
    userId: '1',
  },
  '2': {
    id: '2',
    content:
      "What's most compelling about 'The Two Popes' is how Hopkins and Pryce approach their roles.",
    postId: '1',
    userId: '2',
  },
  '3': {
    id: '3',
    content:
      "A whole lot of well-built scenes isn't quite the same as a single well-built movie.",
    postId: '2',
    userId: '3',
  },
  '4': {
    id: '4',
    content:
      '...just like the school itself, Olivia thrums with the rhythm of life, pain and joy just beneath its pretty trappings.',
    postId: '3',
    userId: '2',
  },
  '5': {
    id: '5',
    content: 'Powerful message, but plot falls short in faith-based drama. ',
    postId: '2',
    userId: '3',
  },
};

module.exports = {
  postsDb,
  commentsDb,
  usersDb,
};
