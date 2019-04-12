const db = require("mariadb");

let pool = db.createPool({
  host: "localhost",
  user: "root",
  password: "",
  connectionLimit: 5,
  database: "site"
});

module.exports = pool;

module.exports = dbConn;
