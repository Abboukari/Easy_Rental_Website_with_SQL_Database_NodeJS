// const express = require('express');

// const router = express.Router();

// module.exports = (params) => {
//   const {klantdisplay} = params; 

//   router.get('/', async (request, response, next) => {
//     try {
//       const klant= await klantdisplay.getList();
//       return response.render('layout', { pageTitle: 'Welkom', template: 'klant', klant });
//     } catch(err){
//       return next(err);
//     }
//   });
//   return router;
// };
