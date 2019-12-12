const express = require('express');
const { postsDb, commentsDb, usersDb } = require('../db/postsDb');
const { getCommentsForPost } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Object.values(commentsDb));
});

module.exports = router;
