const { Pool } = require("pg"); // npm package that connects postgres
// const {
//   start
// } = require("./index.js");


// Connects to our database
const pool = new Pool({
  user: "postgres",
  password: "1Harley!1",
  network: "locatlhost",
  database: "employees_db",
});

// Prompts user with choices for what they wish to do

// function quit() {
//     console.log('Bye!')
//     process.exit()
// }

pool.connect();

module.exports = pool;

