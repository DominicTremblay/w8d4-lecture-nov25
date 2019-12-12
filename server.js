const express = require('express');
const port = process.env.port || 3001;
const postsDb = require('./db/postsDb');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const postsForUser = function(userId) {
  return Object.values(postsDb).filter(post => post.userId === userId);
};

app.get('/posts', (req, res) => {
  res.json(Object.values(postsDb));
});

app.post('/posts', (req, res) => {
  const { content } = req.body;

  const id = Math.random()
    .toString(36)
    .substr(2, 6);
  const newPost = {
    id,
    content,
    userId: 1,
  };

  postsDb[id] = newPost;
  res.redirect('/posts');
});

app.get('/users/:id/posts', (req, res) => {
  const userId = Number(req.params.id);
  const posts = postsForUser(userId);
  res.json(posts);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
