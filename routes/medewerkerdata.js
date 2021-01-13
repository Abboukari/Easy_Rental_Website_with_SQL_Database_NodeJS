const { request, response } = require('express');
const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { medewerkerService } = params;

  router.get('/', async (request, response) => {
    const medewerkers = await medewerkerService.getList();
    return response.json(medewerkers);
  });

  return router;
};
