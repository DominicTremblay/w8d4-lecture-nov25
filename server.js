const express = require('express');
const port = process.env.port || 3001;
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['12345', 'green-gobin'],
  }),
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port ${port}`));
