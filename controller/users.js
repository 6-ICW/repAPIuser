const db = require("../database");

const getusersInfo = (req, res) => {
  const sql = "select * from users";
  db.all(sql, (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "ok", data: rows });
  });
};

// doe een controle op gebruikersnaam en wachtwoord
const controleURNWW = (req, res) => {
  // Nodige variabelen aanmaken
  let username = req.body.username;
  let wachtwoord = req.body.wachtwoord;

  // doe iets van controle
  const sql =
    "select count(userID) as aantal from users where email= ? and wachtwoord = ?";
  db.all(sql, [username, wachtwoord], (err, rows) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "ok", data: rows });
  });
};

const addUser = (req, res) => {
  let username = req.body.username;
  let wachtwoord = req.body.wachtwoord;
  let nickname = req.body.nickName;

  const sql = "insert into users (email,wachtwoord,nickname) values (?,?,?)";
  db.run(sql, [username, wachtwoord, nickname], (err) => {
    if (err) return res.json({ result: "nok", message: err.message });
    res.json({ result: "ok", data: { insertedID: this.lastID } });
  });
};

module.exports = {
  controleURNWW,
  addUser,
  getusersInfo,
};
