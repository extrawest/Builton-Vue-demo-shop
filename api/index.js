const express = require('express');
const hash = require('password-hash');
const app = express();
const fs = require('fs');

function getUserInfo(buffer, payload) {
  const {name, email, password} = payload;
  const users = JSON.parse(buffer.toString());
  const user = users.find(e => e.email === email);
  const verified = hash.verify(password, user.password);

  if (!user) return {success: false, message: 'There is no user with this email address'};
  if (!verified) return {success: false, message: 'Password is not correct'};

  return {
    success: true,
    user: {name, email}
  };
}

app.use(express.urlencoded());
app.use(express.json());

app.post('/auth', (req, res) => {
  fs.readFile(`${__dirname}/users.txt`, (_, buffer) => {
    const userInfo = getUserInfo(buffer, req.body);

    if (userInfo.success) res.json(userInfo.user);
    else res.status(400).send({message: userInfo.message})
  });
});

module.exports = {
  path: '/api',
  handler: app
};
