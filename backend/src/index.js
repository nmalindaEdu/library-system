#!/usr/bin/env node
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
// const { autoLoadRoutes } = require('./utils/autoLoad');
const { userRoutes } = require('./modules/UserManagement/user.routes');
const { errorHandler } = require('./utils/errorhandler');

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

  userRoutes(app);
  // try {
  //   console.log('starting autoLoad');
  //   await autoLoadRoutes(app);
  //   console.log('after atoLoad');
  // } catch (error) {
  //   console.log(error);
  //   return undefined;
  // }
  app.use(errorHandler);

  module.export = app.listen(app.get('port'), () => {
    console.log(`listening on *:${app.get('port')}`);
    app.emit('SERVER STARTED');
  });
};
setupApp();
