const express = require('express');
const router = express.Router();
const { postsForUser } = require('../helpers/helpers');
const usersDb = require('../db/usersDb');

router.get('/', (req, res) => {
  res.json(Object.values(usersDb));
});

router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  const userId = Math.random()
    .toString(36)
    .substr(2, 6);

  const newUser = {
    id: userId,
    name,
    email,
    password,
  };

  req.session['user_id'] = userId;

  usersDb[userId] = newUser;

  res.redirect('/api/users');
});

router.get('/:id/posts', (req, res) => {
  const userId = Number(req.params.id);
  const posts = postsForUser(userId);
  res.json(posts);
});

module.exports = router;
