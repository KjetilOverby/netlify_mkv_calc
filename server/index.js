const express = require('express');
require('./mongoose');

const Posts = require('../models/Poster.js');

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());

app.get('/posts', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  Posts.find({})
    .then((Posts) => {
      res.send(Posts);
    })
    .catch((e) => {});
});

app.listen(port, () => {
  console.log('Server is running on port' + port);
});
