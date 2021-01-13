/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const createError = require('http-errors')

const Fietsendisplay = require('./services/fietsendisplay');
const MedewerkerService = require('./services/MedewerkerService');
const Klantdisplay = require('./services/klantdisplay')

const fietsendisplay = new Fietsendisplay('./data/fietsdata.json');
const medewerkerService = new MedewerkerService('./data/medewerkers.json');
const klantdisplay = new Klantdisplay('./data/klant.json');

const routes = require('./routes');

const app = express();
const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['ja8sdfu9a998sydf83', 'girafasfasdfads23r23'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    fietsendisplay,
    medewerkerService,
    klantdisplay,
  })
);

app.use((request, response, next) => {
  return next(createError(404,'File not found'));
});

app.use((err, request, response, next) => {
  response.locals.message = err.message;
  console.error(err);
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render('error');
});


app.listen(port, () => {
  console.log('This port is up and running');
});
