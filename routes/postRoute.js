const express = require('express');
const { postsDb, commentsDb, usersDb } = require('../db/postsDb');
const { getCommentsForPost } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Object.values(postsDb));
});

router.get('/posts/:id', (req, res) => {
  const postId = req.params.id;

  // res.send('<html><body><h1>hello</h1><body></html>');

  res.json(postsDb[postId]);
});

router.put('/:id', (req, res) => {
  console.log('Put request');
});

router.get('/:id/update', (req, res) => {
  const postId = req.params.id;
  const templateVars = {
    post: postsDb[postId],
  };

  console.log(templateVars);

  res.render('post_show', templateVars);
});

router.post('/', (req, res) => {
  // extract the info for body of request

  console.log('Creating Post');

  const content = req.body.content;

  // create a new post object

  const postId = Math.random()
    .toString(36)
    .substr(2, 6);

  const newPost = {
    id: postId,
    content,
    userId: '1',
  };

  // add it to the db

  postsDb[postId] = newPost;

  // redirect /posts

  res.redirect('/posts');
});

router.get('/:id/comments', (req, res) => {
  const postId = req.params.id;

  const comments = getCommentsForPost(postId);

  res.json(comments);
});

module.exports = router;
