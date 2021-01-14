const sql = require("mssql");

const dbConfig = {
    user: "sa",
    password: "sa",
    server: "LAPTOP-P4K60JEISQLEXPRESS",
    database: "FietsFantastisch",
}

const connection = sql.connect(
    "mssql://sa:sa@localhost/FietsFantastisch"
); 

console.log("Connectie met database is gemaakt");

module.exports = connection;