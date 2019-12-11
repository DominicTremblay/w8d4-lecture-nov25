const express = require('express');
const port = process.env.port || 3001;

const app = express();

app.listen(port, () => console.log(`Server running on port ${port}`));
