const express = require('express');
const app = express();
import {addUser} from './dbHelper'

app.use(express.urlencoded());
app.use(express.json());

app.post('/auth', ({body}, res) => {
  const {name, email, password} = body;

  addUser({name, email, password})
    .then(userId => res.json({userId}))
    .catch(() => res.status(400)
      .send({message: 'User with email address already exists'})
    );
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json({ok: 'dobro'});
});

module.exports = {
  path: '/api',
  handler: app
};
