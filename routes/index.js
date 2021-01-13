/* eslint-disable no-console */
const express = require('express');

const fietsRoute = require('./fietsdata');
const klantenRoute = require('./klantdata');
const accesoiresRoute = require('./accesoiresdata');
const medewerkerRoute = require('./medewerkerdata');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }
    request.session.visitcount += 1;
    console.log(`Aantal bezoeken van 1 speciefieke user: ${request.session.visitcount}`);
    response.render('layout', { pageTitle: 'Welkom', template: 'index' });
  });

  router.use('/fietsdata', fietsRoute(params));
  router.use('/klantdata', klantenRoute());
  router.use('/accesoiresdata', accesoiresRoute());
  router.use('/medewerkerdata', medewerkerRoute(params));

  return router;
};
