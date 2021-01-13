/* eslint-disable no-console */
const express = require('express');

const fietsRoute = require('./fiets');
const klantenRoute = require('./klant');
const medewerkerRoute = require('./medewerker');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response, next) => {
    try {
      if (!request.session.visitcount) {
        request.session.visitcount = 0;
      }
      request.session.visitcount += 1;
      console.log(`Aantal bezoeken van 1 speciefieke user: ${request.session.visitcount}`);
      return response.render('layout', { pageTitle: 'Welkom', template: 'index' });
    } catch(err) {
      return next(err);
    }
  });

  router.use('/fiets', fietsRoute(params));
  router.use('/klant', klantenRoute(params));
  router.use('/medewerker', medewerkerRoute(params));

  return router;
};
