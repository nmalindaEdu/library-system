const { config } = require('../../config');
const { create } = require('./user.controller');

exports.userRoutes = (app) => {
  app.route(`${config.app.apiBase}/users`).post(create);
};
