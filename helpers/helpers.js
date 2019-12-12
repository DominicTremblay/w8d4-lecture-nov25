const { postsDb, commentsDb, usersDb } = require('../db/postsDb');

const getCommentsForPost = postId => {
  return Object.values(commentsDb).filter(comment => comment.postId === postId);
};

const getPostsForUser = userId => {
  return Object.values(postsDb).filter(post => (post.userId = userId));
};

module.exports = {
  getCommentsForPost,
  getPostsForUser,
};
