const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const setupApp = async () => {
  const app = express();

  app.set('port', config.config.app.port);
  app.set('ip', config.config.app.ip);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors(config.cors));

  app.get('/', (req, res) => {
    res.send('LMS API SERVER!');
  });

  module.export = app.listen(app.get('port'), () => {
    console.log(`listening on *:${app.get('port')}`);
    app.emit('SERVER STARTED');
  });
};
setupApp();
