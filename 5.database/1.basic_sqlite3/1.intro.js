const sqlite3 = require("sqlite3").verbose();
// const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("test.db");

db.run("CREATE TABLE IF NOT EXISTS messages (text TEXT)"); // 없으면 만들 것

db.run("INSERT INTO messages(text) VALUES (?)", ["Hello, SQLite"]);

db.each("SELECT * FROM messages", (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
