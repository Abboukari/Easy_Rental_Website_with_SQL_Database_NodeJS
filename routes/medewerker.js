const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { medewerkerService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const medewerker = await medewerkerService.getList();
      return response.render('layout', { pageTitle: 'Welkom', template: 'medewerker', medewerker });
    } catch(err) {
      return next(err);
    }
  });

  return router;
};
