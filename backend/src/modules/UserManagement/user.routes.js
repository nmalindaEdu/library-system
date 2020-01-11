const { config } = require('../../config');
const { create, list, update } = require('./user.controller');

exports.userRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/users`)
    .post(create)
    .get(list);
  app.route(`${config.app.apiBase}/users/:userId`).put(update);
  // .get(listEachCustomer)
};
