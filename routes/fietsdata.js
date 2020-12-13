const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const {fietsendisplay} = params; 
  router.get('/', async (request, response) => {
    const fietsdata = await fietsendisplay.getList();
    return response.json(fietsdata)
  });
  return router;
};
