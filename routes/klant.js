const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const {klantdisplay} = params; 

  router.get('/', async (request, response) => {
    const klant= await klantdisplay.getList();
    response.render('layout', { pageTitle: 'Welkom', template: 'klant', klant });
  });
  return router;
};
