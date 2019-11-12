const sql = require('sqlite3').verbose();
const db = new sql.Database('./ehDb');

export function addUser(user) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', Object.values(user), function (err) {
      if (err) reject();
      else resolve(this['lastID']);
    });
  });
}

export function getUser({email, password}) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users where (email==?) AND (password==?)', [email, password], function (err, rows) {
      if (err) reject();
      else resolve(rows);
    });
  });
}

export function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users where (email==?)', [email], function (err, rows) {
      if (err) reject();
      else resolve(rows);
    });
  });
}
