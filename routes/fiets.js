const express = require('express');

const router = express.Router();
const sql = require('mssql');
const db_connection = require('../library/dbfiets');
const request = new sql.Request();
const Fiets = require('../services/fiets');

module.exports = (params) => {
  const {fietsendisplay} = params; 

  router.get('/', async (req, response, next) => {

    let database_result = [];
    request.query('SELECT * FROM fiets',
        function(err, result) {
          if (err === null) {
            result.recordset.forEach(function(result) {
              let fiets = new Fiets(
                result.type,
                result.nieuw_prijs,
                result.dag_prijs,
                result.borg_prijs,
                result.merk
              );

              database_result.push(fiets);
            });

            try {
              return response.render('layout', { pageTitle: 'Welkom', template: 'fiets', fiets: database_result });
            } catch(err) {
              return next(err)
            }
          } else {
          }
        }
      );
  });
  return router;
};

