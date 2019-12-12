const express = require('express');
const router = express.Router();
const commentsDb = require('../db/commentsDb');

router.get('/', (req, res) => {
  res.json(Object.values(commentsDb));
});

router.get('/:id', (req, res) => {
  const commentId = req.params.id;

  const comment = Object.values(commentsDb).find(
    comment => comment.id === commentId,
  );

  res.json(comment || { msg: 'Not Found' });
});

module.exports = router;
