const express = require('express');
const app = express();

app.get('/echo', (req, res) => {
  res.send('Hello req');
});

module.exports = {
  path: '/api',
  handler: app
};
