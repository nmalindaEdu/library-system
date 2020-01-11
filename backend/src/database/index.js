'use strict';
const config = require('../config');

module.exports = require('knex')(config.config.database);
