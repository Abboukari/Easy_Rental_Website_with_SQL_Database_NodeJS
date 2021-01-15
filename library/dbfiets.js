const sql = require("mssql");

const connection = sql.connect(
  `mssql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.SERVER}/${process.env.DATABASE}`
); 

console.log("Connectie met database is gemaakt");

module.exports = connection;