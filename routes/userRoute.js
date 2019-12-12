const express = require('express');
const { postsDb, commentsDb, usersDb } = require('../db/postsDb');
const { getPostsForUser } = require('../helpers/helpers');
const router = express.Router();

router.get('/users/:id/posts', (req, res) => {
  const userId = req.params.id;

  const posts = getPostsForUser(userId);

  res.json(posts);
});

module.exports = router;
