const express = require('express');
const app = express();
import {getUser, addUser} from './dbHelper'

app.use(express.urlencoded());
app.use(express.json());

app.post('/auth', ({body}, res) => {
  const {name, email, password} = body;

  addUser({name, email, password})
    .then(userId => {
      res.cookie('built-on-secret', email);
      res.json({userId});
    })
    .catch(() => res.status(400)
      .send({message: 'User with email address already exists'})
    );
});

app.post('/login', ({body}, res) => {
  const {email, password} = body;

  getUser({email, password})
    .then(user => {
      res.cookie('built-on-secret', email);
      res.json(user[0]);
    })
    .catch(() => res.status(400).send({message: 'Email or password in not correct'}));
});

app.post('/logout', (req, res) => {
  res.cookie('built-on-secret', '');
  res.json({message: 'dobro'})
});

module.exports = {
  path: '/api',
  handler: app
};
