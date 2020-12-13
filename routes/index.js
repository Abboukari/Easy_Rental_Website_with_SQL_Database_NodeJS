const express = require('express');

const fietsRoute = require('./fietsdata');
const klantenRoute = require('./klantdata');
const accesoiresRoute = require('./accesoiresdata');
const medewerkerRoute = require('./medewerkerdata');

const router = express.Router();

module.exports = params => {
  router.get('/', (request, response) => {

    if(!request.session.visitcount) {
      request.session.visitcount = 0; 
    }
    request.session.visitcount += 1;
    console.log(`Aantal bezoeken van 1 speciefieke user: ${ request.session.visitcount}`);
    response.render('pages/index', { pageTitle: 'Welkom' });
  });

  router.use('/fietsdata', fietsRoute(params));
  router.use('/klantdata', klantenRoute());
  router.use('/accesoiresdata', accesoiresRoute());
  router.use('/medewerkerdata', medewerkerRoute());

  return router;
};
