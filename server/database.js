const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTRESQL_PASS,
  host: process.env.POSTGRESQL_HOST,
  port: 5432, // default port
  database: process.env.POSTGRESQL_DB,
});

async function makeQuery(query) {
  try {
    const client = await pool.connect();
    try {
      const res = await client.query(query);
      return res.rows;
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("Database query error", err);
    throw err;
  }
}

module.exports = { pool, makeQuery };
