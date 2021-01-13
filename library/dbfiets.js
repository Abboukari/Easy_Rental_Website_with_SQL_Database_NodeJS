const sql = require("mssql");

const dbConfig = {
    user: "sa",
    password: "sa",
    server: "LAPTOP-P4K60JEISQLEXPRESS",
    database: "FietsFantastisch",
}

const connection = sql.connect(
    "mssql://sa:sa@LAPTOP-P4K60JEISQLEXPRESS/FietsFantastisch"
); 

console.log("Connectie is gemaakt");
