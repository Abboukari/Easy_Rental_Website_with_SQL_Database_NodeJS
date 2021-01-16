const express = require('express');
const router = express.Router();

const sql = require('mssql');
const dbConfig = require('../library/dbfiets');
const request = new sql.Request();

module.exports = (params) => {
  router.get('/', function (req, res, next) {
    request.query('SELECT * FROM Medewerker ORDER BY achternaam ASC FOR JSON AUTO', function (err, rows) {
      if (err) {
        // req.flash("error", err);
        res.render('medewerkerm/medewerkerdatabase.ejs', { pageTitle: 'MSSQL DATASET', data: '' });
      } else {
        let newResults = [];
        for (let key in rows) {
          if (key === 'recordsets') {
            rows[key].forEach((arr) => {
              arr.forEach((obj) => {
                Object.keys(obj).forEach((key) => {
                  newResults.push(obj[key]);
                });
              });
            });
          }
        }

        rows = JSON.parse(newResults);
        res.render('medewerkerm/medewerkerdatabase.ejs', { pageTitle: 'MSSQL DATA', data: rows });
      }
    });
  });
  return router;
};

/* De QUery om de rol erbij te voegen werkt niet, is dit omdat deze te lang is, of omdat dit niet te koppelen is qua joins?
Is er een mogenlijkheid hier tijdens het assesment vragen over te stellen of op een ander moment?
De query die ik graag had willen gebruiken:

SELECT  m.voornaam,m.achternaam,m.geboortedatum,r.Rol_naam as Functie,m.login_naam,m. paswoord
FROM Medewerker m
JOIN Rollen_medewerker rm ON m.medewerkernummer=rm.medewerkernummer
JOIN Rollen r ON rm.Rol_id= r.Rol_id
ORDER BY voornaam desc; */
