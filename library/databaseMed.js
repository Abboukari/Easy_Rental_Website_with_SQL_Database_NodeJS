
const sql = require('mssql');


  // config for your database
  const reneeDb = {
    user: 'sa',
    password: 'mypassword',
    server: 'localhost',
    database: 'FietsFantastisch',
  };
  
const connectieReneeDB = sql.connect(
    "mssql://", function (err),{
        if (err) console.log(err);
    }
);
 
console.log("Connectie met de database is een feit");

module.exports = connection;