const db = require("../config/db");

module.exports = class {
  static async getPage(pageKey) {
    let connection = await db.getConnection();
    const rows = await connection.query(
      "SELECT * FROM page WHERE pageKey = ?",
      [pageKey]
    );
    connection.end();
    return rows;
  }

  static async savePage(pageKey, title, content) {
    let connection = await db.getConnection();
    // let q =
    //   "INSERT INTO page (pageKey, title, content) values(?, ?, ?) ON DUPLICATE KEY UPDATE title=?, content=?";
    // console.log(q, pageKey, title, content);
    const result = await connection.query(
      "INSERT INTO page (pageKey, title, content) values(?, ?, ?) ON DUPLICATE KEY UPDATE " +
        "title=?, content=?",
      [pageKey, title, content, title, content]
    );

    connection.end();
    return result;
  }
};
