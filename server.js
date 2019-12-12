const express = require('express');
const port = process.env.port || 3001;
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const { postsDb, commentsDb, usersDb } = require('./db/postsDb');
const postRoutes = require('./routes/postRoute');
const userRoutes = require('./routes/userRoute');
const commentRoutes = require('./routes/commentRoutes');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['12345', 'green-gobin'],
  }),
);

app.set('view engine', 'ejs');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(morgan('combined'));
// Creating a custom middleware
const logReqInfo = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Url Pattern:', req.url);
  console.log('req.params', req.params);
  console.log('req.body', req.body);

  next();
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Activate our custom middleware
// app.use(logReqInfo);

// Activates the router middleware
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
