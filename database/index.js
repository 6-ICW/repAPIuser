const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/users.sqlite3", (err) => {
  if (err) return console.log(err.message);
  console.log("connected to database");
});

module.exports = db;
