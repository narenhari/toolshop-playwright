const mysql = require('mysql2/promise');

async function query(sql, params = []) {
  const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'toolshop',
  });
  const [rows] = await conn.execute(sql, params);
  await conn.end();
  return rows;
}

module.exports = { query };