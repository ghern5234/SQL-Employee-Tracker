const { Pool } = require("pg"); // npm package that connects postgres


// Connects to our database
const pool = new Pool({
  user: "postgres",
  password: "1Harley!1",
  network: "locatlhost",
  database: "employees_db",
});


pool.connect();

module.exports = pool;

