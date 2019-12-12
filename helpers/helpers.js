const postsDb = require('../db/postsDb');
const commentsDb = require('../db/commentsDb');

const postsForUser = function(userId) {
  return Object.values(postsDb).filter(post => post.userId === userId);
};

const commentsForPost = postId => {
  return Object.values(commentsDb).filter(comment => comment.postId === postId);
};

module.exports = {
  postsForUser,
  commentsForPost,
};
