const sqlite3 = require("sqlite3").verbose();

function connectToDatabase() {
  return new sqlite3.Database("mydb.db");
}

function queryName(db, searhName) {
  const selectQuery = "SELECT * FROM employees WHERE name =?";

  console.time("Query Time");
  db.get(selectQuery, [serchName], (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Result:", row);
    }
    console.time("Query Time");
  });
}
module.exports = { connectToDatabase, queryName };
