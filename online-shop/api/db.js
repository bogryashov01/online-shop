const dotenv = require('dotenv');
dotenv.config();
const pg = require('pg');

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
});

module.exports = pool;
