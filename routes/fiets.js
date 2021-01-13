const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const {fietsendisplay} = params; 

  router.get('/', async (request, response) => {
    const fiets= await fietsendisplay.getList();
    response.render('layout', { pageTitle: 'Welkom', template: 'fiets', fiets });
  });
  return router;
};
