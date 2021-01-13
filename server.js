/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const Fietsendisplay = require('./services/fietsendisplay');
const MedewerkerService = require('./services/MedewerkerService');
const Klantdisplay = require('./services/klantdisplay')

const fietsendisplay = new Fietsendisplay('./data/fietsdata.json');
const medewerkerService = new MedewerkerService('./data/medewerkers.json');
const klantdisplay = new Klantdisplay('./data/klant.json');

const routes = require('./routes');

// const { Session } = require('inspector');

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

app.listen(port, () => {
  console.log('This port is up and running');
});
