const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const {fietsendisplay} = params; 

  router.get('/', async (request, response, next) => {
    try {
      const fiets= await fietsendisplay.getList();
      return response.render('layout', { pageTitle: 'Welkom', template: 'fiets', fiets });
    } catch(err) {
      return next(err)
    }
  });
  return router;
};
