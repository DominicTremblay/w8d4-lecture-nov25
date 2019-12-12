const express = require('express');
const router = express.Router();
const postsDb = require('../db/postsDb');
const commentsDb = require('../db/commentsDb');
const { commentsForPost } = require('../helpers/helpers');
router.get('/', (req, res) => {
  res.json(Object.values(postsDb));
});

router.post('/', (req, res) => {
  if (req.user) {
    const { content } = req.body;

    const id = Math.random()
      .toString(36)
      .substr(2, 6);
    const newPost = {
      id,
      content,
      userId: req.user.id,
    };

    postsDb[id] = newPost;
    res.redirect('/api/posts');
  } else {
    res.send('please login or register');
  }
});

router.get('/:id/comments', (req, res) => {
  const post = postsDb[req.params.id];

  const comments = commentsForPost(req.params.id);

  res.json({
    post,
    comments,
  });
});

router.post('/:id/comments', (req, res) => {
  const postId = req.params.id;
  const commentId = Math.random()
    .toString(36)
    .substr(2, 6);

  const content = req.body.content;

  const newComment = {
    id: commentId,
    content,
    postId,
    userId: 1,
  };

  commentsDb[commentId] = newComment;

  res.redirect(`/api/posts/${postId}/comments`);
});

module.exports = router;
