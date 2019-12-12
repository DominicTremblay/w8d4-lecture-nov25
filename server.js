const express = require('express');
const morgan = require('morgan');
const port = process.env.port || 3001;
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const cookieSession = require('cookie-session');
const usersDb = require('./db/usersDb');

const app = express();

app.use(morgan('tiny'));

app.use(
  cookieSession({
    name: 'session',
    keys: ['12345', 'green-gobin'],
  }),
);

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const currentUser = (req, res, next) => {
  console.log('into current user');
  const userId = req.session['user_id'];

  console.log({ userId });

  req.user = usersDb[userId];

  console.log('currentUser:', req.user);

  next();
};

app.use(currentUser);

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
