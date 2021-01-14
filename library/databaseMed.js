
const sql = require('mssql');


  // config for your database
  const reneeDb = {
    user: 'sa',
    password: '1Heras',
    server: 'MSI\SQLEXPRESS',
    database: 'FietsFantastisch',
  };

/*   function getEmp() {
    var conn = new sql.ConnectionError(dbConfig)
    var req = new sql.Request(conn);

    conn.connect(function(err){
      if (err){
        console.log(err);
        return;
      }
      req.query("SELECT * FROM Medewerker", function(err, recordset){
        if (err){
        console.log(err);
      } else {
        console.log(recordset);
      }
      conn.close();
      })
    })
  }

  getEmp(); */
  
const connectieReneeDB = sql.connect(
    "mssql://localhost/medewerkerd", function (err),{
        if (err) console.log(err);
    }
);
 
console.log("Connectie met de database is een feit");

module.exports = connection;