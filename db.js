const Pool = require("pg").Pool;

const pool = new Pool({
  user: "lancehebert",  
  host: "localhost",
  port: 5432,
  database: "pernjob"
});

module.exports = pool;
