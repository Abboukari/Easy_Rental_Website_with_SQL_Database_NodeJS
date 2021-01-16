/* eslint-disable no-console */
const express = require('express');

// const fietsRoute = require('./fiets');
// const medewerkerRoute = require('./medewerker');
// const klantenRoute = require('./klant');
const fietsdataRoute = require('./fietsm')
const klantdataRoute = require('./klantm');
const medewerkerdataRoute = require('./medewerkerm');

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
    } catch (err) {
      return next(err);
    }
  });

  // router.use('/medewerker', medewerkerRoute(params));
  // router.use('/fiets', fietsRoute(params));
  // router.use('/klant', klantenRoute(params));
  router.use('/medewerkerm', medewerkerdataRoute(params));
  router.use('/fietsm', fietsdataRoute(params));
  router.use('/klantm', klantdataRoute(params));
  return router;
};
