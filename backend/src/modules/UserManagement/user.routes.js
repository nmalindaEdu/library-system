const { config } = require('../../config');
const { create, list, update, deleteUser } = require('./user.controller');

exports.userRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/users`)
    .post(create)
    .get(list);
  app
    .route(`${config.app.apiBase}/users/:userId`)
    .put(update)
    .delete(deleteUser);
  // .get(listEachCustomer)
};
