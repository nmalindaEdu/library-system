#!/usr/bin/env node
'use strict';
const config = require('./src/config/index');

exports.development = config.config.database;
exports.production = config.config.database;
