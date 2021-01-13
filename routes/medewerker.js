const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { medewerkerService } = params;

  router.get('/', async (request, response) => {
    const medewerker = await medewerkerService.getList();
    response.render('layout', { pageTitle: 'Welkom', template: 'medewerker', medewerker });
  });

  return router;
};
