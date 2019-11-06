const sql = require('sqlite3').verbose();
const db = new sql.Database(`${__dirname}/../ehDb`);

export function addUser(user) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', Object.values(user), function (err) {
      if (err) reject();
      else resolve(this['lastID']);
    });
  });
}
